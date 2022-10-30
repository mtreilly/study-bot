import { type NextApiRequest, type NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const openai = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    // Process a POST request
    const configuration = new Configuration({
      //apiKey: process.env.OPENAI_API_KEY,
      apiKey: "sk-oY5Xc6ldncar5gKSy5LjZBSDBK1T056E8GsrOeTg",
    });
    const openai = new OpenAIApi(configuration);
    const queryText = JSON.stringify(req.body);

    const prePrompt =
      "You are the greatest teacher to have ever lived. Your ability to teach others is unreal. Summarize this text into a series of questions";

    const completion = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: `${prePrompt}\n\n${queryText}\n\nQ:`,
    });
    console.log(completion.data.choices);
    const result = completion.data.choices[0].text;
    res.status(200).json({ result });
  } else {
    // Handle any other HTTP method
    res.status(200).json({ result: "test" });
  }
};

export default openai;
