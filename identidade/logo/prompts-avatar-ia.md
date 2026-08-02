# Prompts de IA — foto de perfil do Instagram

> Três prompts pra gerar um avatar na pegada do `wv-favicon-circulo-512.png`.
> ⚠️ **3D, degradê e metálico estão na lista do "nunca" do `design-guide.md`** —
> é o que a logo antiga tinha e o que a nova cortou. Se for por esse caminho,
> volume **fosco**, nunca plástico ou cromado.
> ⚠️ **Modelo de imagem erra letra.** O avatar *é* a logo — o Prompt C (só o
> fundo, com o SVG real composto por cima) é o de melhor resultado.

## A — volume fosco (recomendado, respeita o guide)

```
A circular app icon, 1:1, filling the frame edge to edge.
Deep navy #0F2544 background, perfectly flat matte color, no gradient.
Centered on it, a bold geometric monogram "WV": a chalk-white W and a brick-red
#C63527 V, angular and flat-sided, sharing a thin diagonal gap between them.
The monogram is subtly extruded — a shallow 3-4mm relief, like thick cut metal
plate laid on a matte surface. Matte painted finish, no chrome, no gloss, no
reflections, no bevel highlights.
Single soft studio light from the upper left casting a short, soft, low-contrast
drop shadow to the lower right. Clean product-photography lighting.
Flat, symmetrical, front-facing view. No perspective, no tilt.
Monogram occupies about 55% of the circle, generous even margin all around.
No text, no letters other than the W and V, no tagline, no border, no outer ring,
no background scene. Solid color only.
```

## B — 3D de verdade

```
A 3D-rendered circular brand avatar, 1:1, square frame.
A matte deep navy #0F2544 disc, seen straight on, softly rounded edge.
Extruded from it, a thick bold monogram "WV" in solid geometric letterforms:
the W in warm off-white #F7F4EF, the V in brick red #C63527, separated by a
narrow diagonal channel. Chunky extrusion with clean flat side walls and crisp
90-degree edges.
Materials: matte painted concrete-like finish, very fine surface grain, zero
gloss, zero metallic, zero chrome.
Soft diffuse studio lighting from above left, gentle ambient occlusion in the
crevices, short soft contact shadow. Muted, calm, architectural mood.
Straight-on orthographic camera, perfectly centered and symmetrical.
No perspective distortion, no floor plane, no environment, no reflections,
no extra text, no border.
Octane-style render, high detail, 1024x1024.
```

## C — só o material, pra compor a logo real por cima

```
A square 1:1 abstract background texture, no subject, no text, no logo.
Uniform deep navy #0F2544 surface with a very fine matte grain, like painted
plaster or fine-tooth cardstock photographed straight on.
Extremely subtle radial falloff: barely lighter at the center, barely deeper at
the edges. Almost flat — the variation should be nearly imperceptible.
Soft diffuse light, no visible light source, no highlights, no vignette ring,
no pattern, no gradient banding, no objects, no shadows.
Calm, premium, editorial. 1024x1024.
```

Depois do C, centralizar `wv-avatar-circulo.svg` por cima do fundo gerado.
