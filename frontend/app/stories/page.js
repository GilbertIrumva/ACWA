import React from 'react';
import Link from 'next/link';
import Container from '../../components/ui/Container';
import SectionHeading from '../../components/ui/SectionHeading';
import { getStories } from '../../lib/sanity/queries';
import { getImageUrl } from '../../lib/sanity/client';
import { User, MapPin, ArrowRight, Calendar } from 'lucide-react';

export const metadata = {
  title: 'Stories & Field News | ACWA Kenya',
  description:
    'Read stories of hope, peace dialogues, and community permaculture from Kakuma Refugee Camp and host communities.',
};

export default async function StoriesPage() {
  const stories = await getStories();
  const featuredStory = stories.find((s) => s.featured) || stories[0];
  const regularStories = stories.filter((s) => s._id !== featuredStory?._id);

  return (
    <div className="space-y-16 sm:space-y-24 py-10 sm:py-16">
      {/* Editorial Hero Header */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden py-20 sm:py-28 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="/IMG_20260113_180100_323.jpg"
            alt="Field dispatches and news from Kakuma"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/65 z-10" />
        </div>

        <Container className="relative z-20">
          <div className="max-w-3xl space-y-6 text-left">
            <span className="text-[#4CAF50] font-bold text-xs uppercase tracking-[3px] block">
              FIELD DISPATCHES & NEWS
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              Stories of Impact from Kakuma
            </h1>
            <div className="border-l-4 border-[#4CAF50] pl-6 my-4">
              <p className="text-lg text-white/90 leading-relaxed font-normal">
                Human-centered reports documenting grassroots peacebuilding, permaculture harvests, child welfare, and community resilience in Turkana County.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white dark:bg-[#042F20]">
        <Container>
          {/* Featured Story Block */}
          {featuredStory && (
            <div className="mb-20 bg-[#1B5E20] text-white rounded-none shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 border-t-4 border-t-[#2E7D32]">
              <div className="lg:col-span-7 aspect-[16/10] lg:aspect-auto relative bg-gray-900">
                <img
                  src={getImageUrl(featuredStory.featuredImage, '/_MG_2602.jpg')}
                  alt={featuredStory.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-[#4CAF50] text-gray-900 text-xs font-bold px-3 py-1 uppercase tracking-wider">
                  FEATURED DISPATCH
                </span>
              </div>

              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <span className="text-xs font-bold text-[#4CAF50] uppercase tracking-widest block">
                    {featuredStory.category}
                  </span>

                  <h2 className="font-serif font-extrabold text-2xl sm:text-3xl text-white leading-snug">
                    {featuredStory.title}
                  </h2>

                  <p className="text-sm text-white/90 leading-relaxed">{featuredStory.excerpt}</p>
                </div>

                <div className="pt-6 border-t border-white/20 flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs text-white/80">
                    <User className="w-4 h-4 text-[#4CAF50]" />
                    <span>{featuredStory.author}</span>
                  </div>

                  <Link
                    href={`/stories/${featuredStory.slug?.current || featuredStory.slug}`}
                    className="inline-flex items-center text-sm font-bold text-[#4CAF50] hover:text-white transition-colors group"
                  >
                    <span>Read Full Story</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Grid of All Field Stories */}
          <SectionHeading
            badge="LATEST FIELD DISPATCHES"
            title="More Stories From Kakuma & Host Villages"
            subtitle="Explore ongoing grassroots projects, peace dialogues, health campaigns, and youth initiatives."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularStories.map((story) => (
              <article
                key={story._id}
                className="group bg-[#F9FAFB] dark:bg-[#064E3B]/40 rounded-none border border-gray-200 dark:border-emerald-800/40 border-t-4 border-t-[#2E7D32] shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                    <img
                      src={getImageUrl(story.featuredImage, '/_MG_2558.jpg')}
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-[#1B5E20] text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                      {story.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="font-serif font-extrabold text-xl text-gray-900 dark:text-white group-hover:text-[#2E7D32] dark:group-hover:text-[#4CAF50] transition-colors leading-snug">
                      <Link href={`/stories/${story.slug?.current || story.slug}`}>{story.title}</Link>
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                      {story.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-gray-200 dark:border-emerald-800/40 mt-4 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span className="flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-[#2E7D32] dark:text-[#4CAF50]" />
                    <span className="truncate max-w-[140px] font-semibold">{story.location}</span>
                  </span>
                  <Link
                    href={`/stories/${story.slug?.current || story.slug}`}
                    className="font-bold text-[#2E7D32] dark:text-[#4CAF50] hover:text-[#1B5E20] flex items-center space-x-1"
                  >
                    <span>Read Story</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
