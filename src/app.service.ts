import { Injectable } from '@nestjs/common';
import { Configuration, OpenAIApi } from 'openai';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Worlddd!';
  }

  async getOpenAI(question: string): Promise<any> {
    const key = process.env.GPT_API_KEY;

    const configuration = new Configuration({
      apiKey: key,
    });
    try {
      const openai = new OpenAIApi(configuration);

      const completion = await openai.createCompletion(
        {
          model: 'text-davinci-003',
          prompt: question,
          max_tokens: 500,
        },
        {
          timeout: 10000,
          headers: {
            'Example-Header': 'example',
          },
        },
      );
      // console.log('1234', completion.data.choices[0].text);
      const data = completion.data.choices[0].text;
      return data;
    } catch (error) {
      console.log('ERROR', error);
    }
  }
}
