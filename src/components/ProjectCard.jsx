import React, { useEffect, useState } from "react";

const ProjectCard = ({ previewImage }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        setLoading(true);
        setErr(null);

        const res = await fetch(
          "https://api.github.com/users/NinoAmbrogio/repos",
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error(`GitHub API ${res.status}`);

        const data = await res.json();
        setRepos(data);
      } catch (e) {
        if (e.name !== "AbortError") setErr(e.message || "Errore sconosciuto");
      } finally {
        setLoading(false);
      }
    }

    load();
    return () => controller.abort();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-400">Caricamento…</p>;
  }

  if (err) {
    return (
      <p className="text-center text-red-400">
        Errore nel fetch: {err}
      </p>
    );
  }

  return (
    <div className="flex flex-wrap gap-10">
      {repos
        .filter(r => !r.fork)
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .map(repo => (
          <div
            key={repo.id}
            className="flex flex-col items-center text-center border-2 border-gray-600 rounded-2xl w-80 overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200 bg-[#12161b]"
          >
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col h-full w-full"
            >
              <img
                src={previewImage}
                alt={repo.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow justify-between">
                <h3 className="text-xl font-semibold mb-2 text-gray-300">
                  {repo.name}
                </h3>
                <p className="text-sm text-gray-400">
                  {repo.description || "Repository senza descrizione"}
                </p>
              </div>
            </a>
          </div>
        ))}
    </div>
  );
};

export default ProjectCard;