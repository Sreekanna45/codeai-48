import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: localStorage.getItem('OPENAI_API_KEY') || '',
  dangerouslyAllowBrowser: true
});

export const generateQuestionsFromContent = async (content: string): Promise<Array<{ question: string; answer: string }>> => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that generates relevant questions and answers based on provided content. Generate 10 questions and their corresponding answers that test understanding of the key concepts in the content."
        },
        {
          role: "user",
          content: `Generate 10 questions and answers based on this content: ${content}`
        }
      ],
      temperature: 0.7,
      max_tokens: 2000,
    });

    const result = response.choices[0]?.message?.content;
    if (!result) return [];

    // Parse the response into questions and answers
    const pairs = result.split('\n\n').filter(pair => pair.trim());
    return pairs.map(pair => {
      const [question, answer] = pair.split('\nA: ');
      return {
        question: question.replace('Q: ', ''),
        answer: answer || ''
      };
    }).slice(0, 10);
  } catch (error) {
    console.error('Error generating questions:', error);
    throw error;
  }
};