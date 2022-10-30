const query =
  "In this chapter we look at the basics of information theory. This is a relatively new field of study, introduced to the world in 1948 in a groundbreaking paper, which laid the foundation for technologies from modern computers and satellites to cell phones and the internet (Shannon 1948). The goal of the original theory was to find the most efficient way to communicate a message electronically. But the ideas of that theory are deep, broad, and profound. They give us tools for measuring how much we know about anything by converting it to a digital form that we can study and manipulate.";
async function getSummary() {
  const res = await fetch("http://localhost:3000/api/openai", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: query }),
  });
  const result = await res.json();
  return result;
}

export default async function Page() {
  const summary = await getSummary();
  return (
    <div>
      <h1>Query</h1>
      <h1>{summary.result}</h1>
    </div>
  );
}
