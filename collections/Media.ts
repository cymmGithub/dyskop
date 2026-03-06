import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  upload: {
    mimeTypes: ['image/jpeg', 'image/png', 'image/webp'],
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      admin: {
        description:
          'Tekst alternatywny obrazka (SEO). Opisz zdjęcie i dodaj "Lublin" naturalnie. Maks. 125 znaków.',
      },
    },
    {
      name: 'displayOrder',
      type: 'number',
      admin: {
        description: 'Kolejność wyświetlania na stronie (mniejsza = wcześniej).',
      },
    },
  ],
}
