import { MapPin, Clock, Instagram } from "lucide-react";
import { BRAND, STORY, WHATSAPP_URL } from "../data";
import { Leaf, LinkButton, Reveal, SectionTitle, WhatsAppIcon } from "../ui";
import { FooterBand } from "./Home";

const About = () => (
  <>
    <section className="pattern-creme pt-24 pb-8 px-5">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-script text-rosa-deep text-3xl leading-none">
          Sobre nós
        </p>
        <span className="text-rosa text-xl">♡</span>
      </div>
      <Reveal className="max-w-5xl mx-auto mt-4">
        <div className="relative rounded-[32px] overflow-hidden shadow-[0_24px_60px_rgba(139,107,79,0.22)] max-w-md mx-auto md:max-w-2xl">
          <img
            src={STORY.photos.duoBalcao}
            alt="As confeiteiras da Doceria Dalpizzol no balcão da loja"
            className="w-full aspect-[4/5] md:aspect-[16/10] object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-5 text-white">
            <p className="text-[10px] tracking-[0.25em] uppercase text-white/80">
              Tradição de família
            </p>
            <p className="font-script text-3xl leading-none mt-1">
              sabor que acolhe.
            </p>
          </div>
        </div>
      </Reveal>
    </section>

    <section className="px-5 pt-6">
      <div className="max-w-3xl mx-auto">
        <SectionTitle eyebrow={STORY.eyebrow} title={STORY.title} />
        {STORY.paragraphs.map((t) => (
          <p key={t} className="mt-4 text-[14.5px] leading-relaxed text-ink/75">
            {t}
          </p>
        ))}
        <div className="mt-5 flex flex-wrap gap-2">
          {STORY.pills.map((t) => (
            <span
              key={t}
              className="text-[11px] px-3.5 py-2 rounded-full font-semibold bg-creme text-marrom-deep"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>

    <section className="px-5 pt-10">
      <div className="max-w-3xl mx-auto grid grid-cols-3 gap-2.5">
        {STORY.values.map((v, i) => (
          <Reveal key={v.title} delay={i * 0.06}>
            <div className="h-full text-center rounded-3xl bg-white/80 border border-marrom/10 p-3.5">
              <span className="w-11 h-11 mx-auto rounded-2xl bg-creme grid place-items-center text-[22px]">
                {v.emoji}
              </span>
              <p className="mt-2 text-[12px] font-semibold text-ink leading-tight">
                {v.title}
              </p>
              <p className="mt-1 text-[10.5px] text-ink/55 leading-snug">
                {v.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="px-5 pt-10">
      <div className="max-w-3xl mx-auto">
        <SectionTitle
          eyebrow="Quem faz"
          title={STORY.makersNames}
          subtitle={STORY.makersIntro}
        />
        <div className="mt-5 grid grid-cols-2 gap-3">
          {STORY.makers.map((m, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <img
                src={m.img}
                alt={`${m.role} da Doceria Dalpizzol`}
                loading="lazy"
                className="w-full aspect-[4/5] object-cover rounded-3xl shadow-[0_12px_32px_rgba(139,107,79,0.12)]"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="px-5 pt-10">
      <div className="max-w-3xl mx-auto grid grid-cols-3 gap-2">
        {[
          STORY.photos.duoBanco,
          STORY.photos.duoCafe,
          STORY.photos.lojaDuo,
        ].map((src, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <img
              src={src}
              alt=""
              loading="lazy"
              className="w-full aspect-[3/4] object-cover rounded-3xl"
            />
          </Reveal>
        ))}
      </div>
    </section>

    <section className="px-5 pt-10">
      <Reveal>
        <div className="max-w-3xl mx-auto rounded-[28px] bg-creme border border-dourado/40 p-5 relative overflow-hidden">
          <Leaf className="absolute -right-3 -top-3 w-28 text-dourado/40" />
          <h3 className="font-serif text-lg text-ink">Visite a gente</h3>
          <p className="mt-2 text-[13px] text-ink/70 inline-flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-rosa-deep" /> {BRAND.city}
          </p>
          <br />
          <p className="mt-1 text-[13px] text-ink/70 inline-flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-salvia-deep" /> {BRAND.hours}
          </p>
          <div className="mt-4 grid sm:grid-cols-2 gap-2.5">
            <LinkButton
              full
              variant="whatsapp"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="w-4 h-4" /> Falar pelo WhatsApp
            </LinkButton>
            <LinkButton
              full
              variant="ghost"
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-4 h-4" /> {BRAND.instagramHandle}
            </LinkButton>
          </div>
        </div>
      </Reveal>
    </section>

    <FooterBand />
  </>
);

export default About;
