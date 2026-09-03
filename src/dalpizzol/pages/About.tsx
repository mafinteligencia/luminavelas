import { motion } from "framer-motion";
import { MapPin, Clock, Instagram } from "lucide-react";
import { BRAND, STORY, WHATSAPP_URL } from "../data";
import { LinkButton, SectionTitle, WhatsAppIcon } from "../ui";
import { FooterBand } from "./Home";
import { Img } from "../Img";
import {
  DrawPath,
  MaskReveal,
  Parallax,
  ScrubScale,
  ScrubText,
  SplitIn,
  TiltIn,
  Words,
} from "../motion";

const LEAF_PATHS = [
  "M2 12c8-9 20-9 44 0",
  "M10 8c1.5 3 1.5 5 0 8",
  "M18 6c2 3.5 2 6.5 0 10",
  "M26 5c2 4 2 8 0 12",
  "M34 6c1.5 3.5 1.5 6.5 0 10",
];

const About = () => (
  <>
    {/* 1 · Capa — foto revelada por um círculo que cresce com o scroll */}
    <section className="pattern-creme pt-24 pb-8 px-5 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-script text-rosa-deep text-3xl leading-none"
        >
          Sobre nós
        </motion.p>
        <motion.span
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="inline-block text-rosa text-xl"
        >
          ♡
        </motion.span>
      </div>
      <MaskReveal className="max-w-5xl mx-auto mt-4">
        <div className="relative rounded-[32px] overflow-hidden shadow-[0_24px_60px_rgba(139,107,79,0.22)] max-w-md mx-auto md:max-w-2xl">
          <Img
            src={STORY.photos.duoBalcao}
            alt="As confeiteiras da Doceria Dalpizzol no balcão da loja"
            className="w-full aspect-[4/5] md:aspect-[16/10] object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-5 text-white">
            <p className="text-[10px] tracking-[0.25em] uppercase text-white/80">
              Tradição de família
            </p>
            <p className="font-script text-3xl leading-none mt-1">
              <Words text="sabor que acolhe." stagger={0.12} delay={0.3} />
            </p>
          </div>
        </div>
      </MaskReveal>
    </section>

    {/* 2 · História — o texto acende palavra por palavra enquanto você lê */}
    <section className="px-5 pt-6">
      <div className="max-w-3xl mx-auto">
        <SectionTitle eyebrow={STORY.eyebrow} title={STORY.title} />
        {STORY.paragraphs.map((t) => (
          <ScrubText
            key={t}
            text={t}
            className="mt-4 text-[15px] leading-relaxed text-ink"
          />
        ))}
        <div className="mt-5 flex flex-wrap gap-2">
          {STORY.pills.map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, scale: 0.6, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 16,
                delay: i * 0.1,
              }}
              className="text-[11px] px-3.5 py-2 rounded-full font-semibold bg-creme text-marrom-deep"
            >
              {t}
            </motion.span>
          ))}
        </div>
      </div>
    </section>

    {/* 3 · Valores — cartões girando em 3D */}
    <section className="px-5 pt-10">
      <div className="max-w-3xl mx-auto grid grid-cols-3 gap-2.5 [perspective:900px]">
        {STORY.values.map((v, i) => (
          <TiltIn key={v.title} index={i}>
            <div className="h-full text-center rounded-3xl bg-white/80 border border-marrom/10 p-3.5">
              <motion.span
                initial={{ rotate: -30, scale: 0 }}
                whileInView={{ rotate: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 12,
                  delay: 0.3 + i * 0.1,
                }}
                className="w-11 h-11 mx-auto rounded-2xl bg-creme grid place-items-center text-[22px]"
              >
                {v.emoji}
              </motion.span>
              <p className="mt-2 text-[12px] font-semibold text-ink leading-tight">
                {v.title}
              </p>
              <p className="mt-1 text-[10.5px] text-ink/55 leading-snug">
                {v.desc}
              </p>
            </div>
          </TiltIn>
        ))}
      </div>
    </section>

    {/* 4 · Quem faz — retratos vindo de lados opostos, cada um no seu ritmo */}
    <section className="px-5 pt-10 overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <SectionTitle
          eyebrow="Quem faz"
          title={STORY.makersNames}
          subtitle={STORY.makersIntro}
        />
        <div className="mt-5 grid grid-cols-2 gap-3">
          {STORY.makers.map((m, i) => (
            <SplitIn key={i} from={i === 0 ? "left" : "right"}>
              <Parallax speed={i === 0 ? 0.12 : -0.12}>
                <Img
                  src={m.img}
                  alt={`${m.role} da Doceria Dalpizzol`}
                  loading="lazy"
                  wrapperClassName="rounded-3xl shadow-[0_12px_32px_rgba(139,107,79,0.12)]"
                  className="w-full aspect-[4/5] object-cover"
                />
              </Parallax>
            </SplitIn>
          ))}
        </div>
      </div>
    </section>

    {/* 5 · Galeria — três fotos, três velocidades de parallax */}
    <section className="px-5 pt-10">
      <div className="max-w-3xl mx-auto grid grid-cols-3 gap-2 items-start">
        {[
          STORY.photos.duoBanco,
          STORY.photos.duoCafe,
          STORY.photos.lojaDuo,
        ].map((src, i) => (
          <Parallax
            key={i}
            speed={[0.25, -0.15, 0.35][i]}
            rotate={[-2, 1, 2][i]}
          >
            <Img
              src={src}
              alt=""
              loading="lazy"
              wrapperClassName="rounded-3xl"
              className="w-full aspect-[3/4] object-cover"
            />
          </Parallax>
        ))}
      </div>
    </section>

    {/* 6 · Visite — cresce com o scroll e o ramo se desenha */}
    <section className="px-5 pt-10">
      <ScrubScale>
        <div className="max-w-3xl mx-auto rounded-[28px] bg-creme border border-dourado/40 p-5 relative overflow-hidden">
          <DrawPath
            d={LEAF_PATHS}
            className="absolute -right-3 -top-3 w-28 text-dourado/60"
            delay={0.2}
          />
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
      </ScrubScale>
    </section>

    <FooterBand />
  </>
);

export default About;
