import React, { useEffect, useMemo, useState } from "react";

const OWNER = "NinoAmbrogio";

const buildCandidates = (repoName, branch) => {
  const bases = [
    `https://raw.githubusercontent.com/${OWNER}/${repoName}/${branch}`,
  ];

  const paths = [
    "src/assets/preview",
    "public/preview",
    "assets/preview",
    "preview",
  ];

  const exts = ["png"];

  const rawCandidates = [];

  bases.forEach((base) =>
    paths.forEach((p) =>
      exts.forEach((ext) => {
        rawCandidates.push(`${base}/${p}.${ext}`);
      })
    )
  );

 
  const og = `https://opengraph.githubassets.com/1/${OWNER}/${repoName}`;

  return [...rawCandidates, og];
};

const RepoCard = ({ repo }) => {
  const candidates = useMemo(
    () => buildCandidates(repo.name, repo.default_branch || "main"),
    [repo.name, repo.default_branch]
  );
  const [idx, setIdx] = useState(0);

  return (
    <div className="flex flex-col items-center text-center border-2 border-gray-600 rounded-2xl w-80 overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200 bg-[#12161b]">
      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col h-full w-full"
      >
        <img
          src={candidates[idx]}
          alt={repo.name}
          className="w-full object-cover h-52"
          onError={() =>
            setIdx((prev) => (prev < candidates.length - 1 ? prev + 1 : prev))
          }
        />
        <div className="p-4 flex flex-col flex-grow item">
          <h3 className="text-xl font-semibold mb-2 text-gray-300">
            {repo.name}
          </h3>
          <p className="text-sm text-gray-400">
            {repo.description || "Repository senza descrizione"}
          </p>
        </div>
      </a>
    </div>
  );
};

const ProjectCard = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const load = async () => {
      try {
        setLoading(true);
        setErr(null);

        const res = await fetch(
          "https://api.github.com/users/NinoAmbrogio/repos",
          {
            signal: controller.signal,
          }
        );
        if (!res.ok) throw new Error(`GitHub API ${res.status}`);

        const data = await res.json();

        const filtered = data
          .filter((r) => !r.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count);

        setRepos(filtered);
      } catch (e) {
        if (e.name !== "AbortError") setErr(e.message || "Errore sconosciuto");
      } finally {
        setLoading(false);
      }
    };

    load();
    return () => controller.abort();
  }, []);

  if (loading) return <p className="text-center text-gray-400">Caricamento…</p>;
  if (err) return <p className="text-center text-red-400">Errore nel fetch: {err}</p>;

  return (
    <div className="flex flex-wrap gap-10">
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

export default ProjectCard;