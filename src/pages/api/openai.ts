import { type NextApiRequest, type NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";
import { env } from "../../env/server.mjs";

const openai = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    // Process a POST request
    const configuration = new Configuration({
      apiKey: env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const queryText = req.body.query;
    const queryType = req.body.type;

    if (queryType === "question") {
      const prePrompt =
        "You are the greatest teacher ever. Generate 3 examination questions from this text";

      const completion = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: `${prePrompt}\n\n${queryText}\n\nGenerate 3 questions\n\n1)`,
        temperature: 0.55,
        max_tokens: 512,
        top_p: 1,
        frequency_penalty: 0.01,
        presence_penalty: 0.0,
        stop: ["\n"],
      });
      console.log(completion.data.choices);
      const result = completion.data.choices[0].text;
      res.status(200).json({ result });
    } else if (queryType == "explain") {
      const prePrompt = "Explain this text to a second grader";

      const completion = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: `${prePrompt}\n\n${queryText}\n\nGenerate Explaination:`,
        temperature: 0.5,
        max_tokens: 512,
        top_p: 1,
        frequency_penalty: 0.01,
        presence_penalty: 0.0,
        stop: ["\n"],
      });
      console.log(completion.data.choices);
      console.log(completion);
      const result = completion.data.choices[0].text;
      res.status(200).json({ result });
    } else if (queryType == "summary") {
      const prePrompt =
        "You are the greatest teacher ever. Generate 3 examination questions from this text";

      const completion = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: `${prePrompt}\n\n${queryText}\n\nGenerate 3 questions\n\n1)`,
        temperature: 0.55,
        max_tokens: 512,
        top_p: 1,
        frequency_penalty: 0.01,
        presence_penalty: 0.0,
        stop: ["\n"],
      });
      console.log(completion.data.choices);
      const result = completion.data.choices[0].text;
      res.status(200).json({ result });
    }
  } else {
    // Handle any other HTTP method
    res.status(200).json({ result: "test" });
  }
};

export default openai;
