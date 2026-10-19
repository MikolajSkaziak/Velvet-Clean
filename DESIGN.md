---
name: Velvet Clean
description: Black silk and one gold drawcord. Pranie tapicerki, Kalisz.
colors:
  silk: "#0b0b0d"
  shadow: "#050506"
  graphite: "#2b2e33"
  slate: "#4a515b"
  mist: "#9aa0ab"
  ecru: "#e9e4da"
  ecru-dim: "#cfcac0"
  gold: "#c8a35a"
  gold-soft: "rgba(200, 163, 90, 0.35)"
typography:
  display:
    fontFamily: "Saira Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(3.2rem, 6.2vw, 5.6rem)"
    fontWeight: 300
    lineHeight: 0.98
    letterSpacing: "0.1em"
  display-numeral:
    fontFamily: "Saira Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(3.6rem, 10vw, 6rem)"
    fontWeight: 300
    lineHeight: 0.9
    letterSpacing: "0.06em"
    fontFeature: "tnum"
  headline:
    fontFamily: "Saira Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2.6rem, 5.4vw, 4.6rem)"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: "0.09em"
  title:
    fontFamily: "Saira Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "1.7rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.08em"
  control:
    fontFamily: "Saira Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.24em"
  link:
    fontFamily: "Saira Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.2em"
  nav:
    fontFamily: "Saira Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.24em"
  body:
    fontFamily: "Saira, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0.01em"
  quote:
    fontFamily: "Saira, system-ui, sans-serif"
    fontSize: "clamp(1.2rem, 1.8vw, 1.45rem)"
    fontWeight: 300
    lineHeight: 1.55
  label:
    fontFamily: "Saira, system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.22em"
rounded:
  none: "0"
  bead: "50%"
spacing:
  gutter: "clamp(20px, 5vw, 72px)"
  max: "1320px"
  section: "clamp(88px, 12vw, 168px)"
  after-stitch: "clamp(48px, 7vw, 88px)"
  column-gap: "clamp(40px, 7vw, 120px)"
  frame-pad: "9px"
  stitch-inset: "4px"
  row: "26px"
components:
  button-primary:
    backgroundColor: "{colors.silk}"
    textColor: "{colors.gold}"
    typography: "{typography.control}"
    rounded: "{rounded.none}"
    padding: "0 30px"
    height: "58px"
  button-primary-hover:
    textColor: "#e3c27f"
  button-secondary:
    backgroundColor: "{colors.silk}"
    textColor: "{colors.ecru}"
    typography: "{typography.control}"
    rounded: "{rounded.none}"
    padding: "0 30px"
    height: "58px"
  text-link:
    textColor: "{colors.ecru}"
    typography: "{typography.link}"
    padding: "10px 0"
  icon-button:
    textColor: "{colors.ecru}"
    rounded: "{rounded.none}"
    size: "52px"
  nav-link:
    textColor: "{colors.mist}"
    typography: "{typography.nav}"
    padding: "12px 0"
  nav-link-active:
    textColor: "{colors.ecru}"
  stitched-frame:
    backgroundColor: "{colors.shadow}"
    rounded: "{rounded.none}"
    padding: "{spacing.frame-pad}"
  state-tag:
    backgroundColor: "rgba(5, 5, 6, 0.78)"
    textColor: "{colors.ecru}"
    padding: "7px 10px"
  call-bar:
    backgroundColor: "rgba(5, 5, 6, 0.94)"
    padding: "12px 14px"
---

> **Out of date (2026-10-19).** The user replaced the black-silk/gold palette with the logo's colours (navy #0d1028, pillow blue #355472, badge cream #e4ddd3, sofa beige #d3c9bb) and the hero wipe with a crossfade, in the Astro build (`src/styles/global.css`, `src/components/Hero.astro`). Tokens and colour rules below still describe the earlier sketch; regenerate this file from the Astro build.

# Design System: Velvet Clean

## Overview

**Creative North Star: "Black Silk, One Gold Cord"**

The page is a length of matte black silk. Everything on it is sewn: frames are stitched rectangles with a dashed inner channel, section breaks are dashed channel-stitch rules, and the one thing that carries colour is a gold drawcord with a bead at its end. The cord is the system's single moving part. It crosses the hero and washes the sofa as the visitor scrolls, it slides under the active nav item, it fills the route from photo to dry sofa, it trails off the end of every button, and it hangs the contact tag from the top of the page. When something is chosen, done, or primary, it wears the cord.

Density is low and the tone is a tailor's: tall tracked condensed capitals for anything that names or labels, a quiet humanist sans for reading, hairline graphite rules between list rows the way a price list is ruled in a fitting room. Depth comes from tone (silk over a deeper shadow black) and from soft photographic masks that dissolve images into the ground, never from lifted cards. Proof photographs stay in honest colour; supporting documentary photos go monochrome so they sit inside the silk.

The world rejects the category default it was chosen against: a white page, a blue trust accent, stock family photography, and icon cards.

**Key Characteristics:**
- Matte black ground with two blacks (silk, shadow) and no other surface colour.
- One accent, gold, rationed to the cord, active state, and the call action.
- Stitched rectangles: a solid hairline outer edge plus a dashed inner channel, square corners.
- Condensed uppercase display and controls with wide tracking (0.06em to 0.42em).
- The bead: small gold or slate circles mark the end of a cord, a step, a leader, an open state.
- Photos dissolve into black through gradient masks rather than meeting it at an edge.

## Colors

Two blacks, three greys, one warm off-white for reading, and one gold that means "pull here".

### Primary
- **Drawcord Gold** (`gold`): the cord in the hero, the active nav cord, the route fill and reached step beads, the open FAQ bead, the contact tag's hanging cord and bead, focus rings, text selection, caret, and the one primary action (Zadzwoń). Never a background fill for a surface.
- **Gold Haze** (`gold-soft`): the inner stitch of a gold button, the ring around the hero bead, and the halo ring of the logo badge. Only ever a companion to solid gold.

### Neutral
- **Matte Silk** (`silk`): the page ground, button fill, and the gap ring around beads and the badge.
- **Deep Fold** (`shadow`): the darker black under photo frames, the call bar, and the state tags laid over photos.
- **Channel Graphite** (`graphite`): hairline row rules, the dashed channel stitch, inner frame stitching, and dividers inside containers.
- **Gather Slate** (`slate`): outer frame edges, control borders, leader and step beads before they are reached, the untaken cord. Non-text only: at 2.45:1 on silk it is never used for words.
- **Mist** (`mist`): secondary text, labels, inactive nav, footer text, price prefixes ("od"). The build uses mist where the original direction named slate for secondary text; mist is what reads.
- **Ecru** (`ecru`): headings, body text, active nav, hovered control borders, the "after" state underline.
- **Dim Ecru** (`ecru-dim`): long-form reading copy that should sit a step behind headings (hero lede, FAQ answers).

### Named Rules
**The One Cord Rule.** Gold is the only chromatic colour. It marks the cord, an active or completed state, and one primary action: the call. A gold button always means "Zadzwoń"; the phone call bar may repeat it, but no other action is ever gold.

**The Two Blacks Rule.** Surfaces are silk or shadow. There is no grey card, no tinted panel, no third background.

## Typography

**Display Font:** Saira Extra Condensed (with Arial Narrow, sans-serif)
**Body Font:** Saira (with system-ui, sans-serif)

**Character:** A tall, narrow capital set wide apart, like woven label tape, over a calm, open sans that reads like a tailor's handwritten tag. The pairing is one family in two widths, so it never argues with itself.

### Hierarchy
- **Display** (300, clamp(3.2rem, 6.2vw, 5.6rem), 0.98): the hero headline only, uppercase, one phrase per line, never wrapping inside a line on desktop.
- **Display Numeral** (300, clamp(3.6rem, 10vw, 6rem), 0.9, tabular): the phone number in the contact section, set as large as the headline.
- **Headline** (300, clamp(2.6rem, 5.4vw, 4.6rem), 1): section titles, uppercase, balanced wrap.
- **Title** (400, 1.7rem, 1): step names, price list items (clamp(1.5rem, 2.4vw, 2rem) in the list), FAQ questions at clamp(1.3rem, 2vw, 1.6rem). Prices use the display face at weight 300 with tabular figures.
- **Control / Link / Nav** (400, 1.15rem / 1.05rem / 1rem, tracking 0.24em / 0.2em / 0.24em, uppercase): buttons, underlined links, and navigation.
- **Body** (400, 17px, 1.65, 0.01em): reading copy, max about 30 to 40em.
- **Quote** (300 italic, clamp(1.2rem, 1.8vw, 1.45rem), 1.55): customer reviews only, max 38em.
- **Label** (500, 0.78rem, 0.22em, uppercase, mist): metadata keys, citations, rating line, hero wash status. Labels sit beside or below the thing they describe; they are not headings.

### Named Rules
**The Tracked Capital Rule.** Every display, title, control and label line is uppercase with tracking of at least 0.06em; reading copy and quotes are never uppercase.

**The Light Display Rule.** Display and headline sizes run at weight 300. Weight goes up only as size goes down (titles and controls at 400, labels at 500).

## Layout

A single centred column of max 1320px with a fluid gutter (clamp(20px, 5vw, 72px)). Sections breathe vertically (clamp(88px, 12vw, 168px)); consecutive sections drop their top padding and are divided instead by a channel stitch rule, after which content begins clamp(48px, 7vw, 88px) below. Two-column splits are asymmetric (roughly 0.8 to 0.9 : 1.3 to 1.4), with the narrower intro column sticky at 120px while the ruled list scrolls beside it. Lists are ruled rows (about 26px block padding) between graphite hairlines, not grids of cards. Results run as a horizontal snap rail (cards min(520px, 82vw), 28px gap) hung from a stitched line by a slate bead and thread.

The header is sticky at 76px on translucent silk with a 14px backdrop blur and a stitch rule along its foot. At 1080px the nav hides; at 900px every split collapses to one column and sticky intros become static; at 760px a fixed call bar appears at the bottom with the primary call action and WhatsApp.

## Elevation & Depth

Flat and tonal. There are no drop shadows. Depth comes from three things: the two blacks (frames and overlays sit on the deeper shadow black), a single wide radial sheen of white at 3 to 3.5% opacity behind the hero and contact sections, and photographic masks that fade images into the ground on their open edges. Translucent silk with backdrop blur is reserved for fixed chrome (header, call bar). Zero-offset spread rings (box-shadow 0 0 0 Npx) are used only as gap rings, separating a bead or the logo badge from what runs behind it.

### Named Rules
**The Dissolve Rule.** A full-bleed photo never meets the black at a hard edge; it fades in through a gradient mask (about 16 to 36% of its width or height on each open side).

**The Monochrome Support Rule.** Before/after evidence stays in true colour. Supporting documentary photos (work in progress, events) are greyscale with slight contrast lift and dimming so they sit inside the silk.

## Shapes

Rectangles with square corners, and circles. Nothing in between. Every framed thing is a stitched rectangle: a 1px slate outer edge, 9px of padding, and a 1px dashed graphite channel inset 3 to 4px inside the edge. Section rules are dashed (6px dash, 5px gap) in graphite. Circles appear only as beads (7 to 11px) and as the round logo badge; they mark the end of a cord, a step, a price leader, or an open state.

### Named Rules
**The Square Stitch Rule.** Frames, buttons, inputs and tags have no corner radius. Rounding belongs to beads and the badge, which are full circles, never to rectangles.

## Components

### Buttons
Stitched and tactile, with a cord hanging off the trailing edge.
- **Shape:** square corners (0), min height 58px, horizontal padding 30px; a dashed graphite inner stitch inset 4px.
- **Cord toggle:** a 40px line with a bead at its trailing end, drawn in the button's text colour, overlapping the edge by 10px; the button reserves 44px of right margin for it. On hover the cord slides 6px further out.
- **Primary (gold):** silk fill, gold text and border, gold-soft inner stitch. Reserved for the call action.
- **Secondary:** silk fill, ecru text, slate border, graphite inner stitch. Hover lifts the border to ecru.
- **Press:** scale 0.97 over 160ms on the quick ease-out curve. Hover effects only apply on fine pointers.
- **In the call bar:** min height 52px, centred, tighter tracking (0.18em), cord hidden.

### Text Links
Uppercase display link with a 1px slate underline that brightens to ecru on hover, followed by a 16px line arrow. Used for secondary actions beside a primary button.

### Icon Buttons
52px square, slate border, no fill, 18px line icon; hover brightens the border to ecru, press scales to 0.97.

### Navigation
Tracked display capitals in mist, 36px apart; the active section turns ecru and a gold cord with a bead slides beneath it (320ms, ease-out). Phone number sits at the right in display type with a gold phone icon; on narrow screens it collapses to a 44px slate-bordered square.

### Stitched Frame (signature)
The container for evidence and media: shadow-black fill, slate outer edge, 9px padding, dashed graphite inner channel. Before/after pieces split the frame into two 3:4 panes with an 8px gap and hang from the rail line by a bead and a 29px thread. A ruled two-cell caption below carries label keys with display-type values.

### State Tags
Small display-capital tags over photos on deep-fold black at 78%: "before" underlined with a dashed mist rule, "after" with a solid ecru rule.

### Price List
Ruled rows: item title, a dashed leader ending in a slate bead, and the price in light display numerals with a small mist "od" prefix. Items quoted from a photo show the phrase in tracked mist capitals instead of a number.

### Route
Four steps on a dashed slate line. On entering view a 2px gold fill draws across (1400ms, in-out curve) and each 11px step bead turns gold in sequence (300ms stagger).

### Disclosure (FAQ)
Ruled rows with a 46px slate line at the trailing edge and a mist bead on it; opening slides the bead 36px along the line and turns it gold.

### Contact Tag
A stitched rectangle hung from above by a gold cord and bead, holding a ruled definition list (label keys, display-type values). Paired with the phone number at display-numeral size.

## Do's and Don'ts

### Do:
- **Do** mark the single primary action, the active state, and the cord in gold, and nothing else.
- **Do** frame evidence and media as stitched rectangles: slate edge, 9px padding, dashed graphite inner channel.
- **Do** separate sections with the dashed graphite channel stitch (6px dash, 5px gap) rather than background changes.
- **Do** set display, titles and controls in tracked uppercase Saira Extra Condensed and labels in tracked uppercase Saira; keep reading copy in sentence-case Saira.
- **Do** let full-bleed photos dissolve into the black through gradient masks.
- **Do** honour reduced motion: the hero wash freezes at its midpoint with static before/after labels, and the route draws without transition.

### Don't:
- **Don't** round the corners of rectangles; radius is for beads and the badge only.
- **Don't** add drop shadows or lifted cards; depth is tonal.
- **Don't** set any text in slate; it is for edges, beads and the untaken cord.
- **Don't** introduce a second accent colour, a white or light section, or a blue trust accent.
- **Don't** use icon cards or stock lifestyle photography; proof is real before/after photographs.
- **Don't** make any action other than the call a gold button.
