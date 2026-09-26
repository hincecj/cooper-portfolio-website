// Papers & Projects — add a new paper by adding an object to this array.
//
//   1. Drop the PDF into the /papers folder.
//   2. Add an entry below (newest first). "file" must match the filename
//      you just added to /papers.
//
// Fields:
//   title, date, description — always used.
//   file  — optional. A PDF in /papers. Shows a "View PDF" link.
//   repo  — optional. A GitHub URL. Shows a "View GitHub Code" link.
//   Include either one, or both, on the same entry.
//
// Examples (for reference, not live):
//   { title: "...", date: "YYYY-MM", description: "...", file: "some-paper.pdf" },
//   { title: "...", date: "YYYY-MM", description: "...", repo: "https://github.com/hincecj/some-repo" },

const papers = [
  {
    title: "Numerical Analysis: A Tourist's Guide Part 1",
    date: "2026-09",
    description: "Part 1 of the numerical analysis series covers a derivation of a simple numerical differential equation solver, applied to simulate the famous three body problem and a damped pendulum in Python.",
    file: "numerical_analysis_part_1.pdf"
  },
];
