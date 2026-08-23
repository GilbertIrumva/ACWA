/**
 * Custom Sanity Studio Structure Builder Configuration
 * Organizes documents into clear navigation groups in Studio.
 */

export const structure = (S) =>
  S.list()
    .title('ACWA Content Management')
    .items([
      S.listItem()
        .title('Core Content')
        .child(
          S.list()
            .title('Core Content')
            .items([
              S.documentTypeListItem('program').title('Programs & Projects'),
              S.documentTypeListItem('story').title('Stories & News Articles'),
              S.documentTypeListItem('event').title('Community Events'),
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Community & Social Proof')
        .child(
          S.list()
            .title('Community & Social Proof')
            .items([
              S.documentTypeListItem('impact').title('Impact Records & Metrics'),
              S.documentTypeListItem('teamMember').title('Team Members'),
              S.documentTypeListItem('testimonial').title('Testimonials'),
              S.documentTypeListItem('partner').title('Partners & Sponsors'),
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Site Settings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Global Site Settings')
        ),
    ]);
