// GitHub Pages has no SPA fallback, so after `react-scripts build` this writes a copy of
// index.html for every blog URL (/blog, /blog/<slug>, /<slug>) with its own title and
// description. 404.html covers any other path.
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const build = path.join(root, "build");
const postsDir = path.join(root, "src/content/posts");
const html = fs.readFileSync(path.join(build, "index.html"), "utf8");

const escape = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const field = (src, name) => (src.match(new RegExp(`${name}:\\s*"((?:[^"\\\\]|\\\\.)*)"`)) || [])[1];

function page(title, description) {
  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${escape(title)}</title>`)
    .replace(/(<meta\s+name="description"\s+content=")[^"]*(")/, `$1${escape(description)}$2`);
}

function write(urlPath, contents) {
  const dir = path.join(build, urlPath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), contents);
}

write("blog", page("Blog | Ali Arman Dai", "Why Ali Arman Dai built each project, what problem it solves, and how it works."));

for (const file of fs.readdirSync(postsDir).filter((f) => f.endsWith(".tsx"))) {
  const src = fs.readFileSync(path.join(postsDir, file), "utf8");
  const slug = field(src, "slug");
  if (slug !== file.replace(/\.tsx$/, "")) throw new Error(`${file}: slug must match the file name`);
  const contents = page(`${field(src, "title")} | Ali Arman Dai`, field(src, "summary") || "");
  write(`blog/${slug}`, contents);
  write(slug, contents);
}

fs.writeFileSync(path.join(build, "404.html"), html);
console.log("Blog pages written.");
