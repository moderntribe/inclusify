import { rest } from 'msw';

type TranslateRequestBody = {
  text: string;
  options: string[];
};

export const handlers = [
  rest.post<TranslateRequestBody>('/translate', (req, res, ctx) => {
    if (!req.body.text) return res(ctx.delay(400), ctx.json([]));
    if (req.body.options.length === 0)
      return res(
        ctx.delay(400),
        ctx.json([
          "It's official: Native Americans and Japanese people is the first U.S. public company to reach a $1 trillion market value."
        ])
      );
    if (req.body.options.includes('name')) {
      return res(
        ctx.delay(400),
        ctx.json([
          "(including name) It's official:",
          {
            symbol: 'Apple',
            synonyms: ['Native Americans'],
            flags: ['gender']
          },
          'and',
          {
            symbol: 'Jap',
            synonyms: ['Japanese people'],
            flags: ['name']
          },
          'is the first U.S. public company to reach a $1 trillion market value.'
        ])
      );
    }

    return res(
      ctx.delay(400),
      ctx.json([
        "It's official:",
        {
          symbol: 'Apple',
          synonyms: ['Native Americans'],
          flags: ['gender']
        },
        'and',
        {
          symbol: 'Jap',
          synonyms: ['Japanese people'],
          flags: ['name']
        },
        'is the first U.S. public company to reach a $1 trillion market value.'
      ])
    );
  })
];
