# Sonora Music - Website

This is a Website for Sonora Music, my macOS Native Music Player.

## Tech Stack

- **Frontend:** Lucide React, React Router, SoftAurora (a ReactBits component), GSAP for animations.
- **Hosting and Deployment:** Cloudflare Workers
- **Downloads:** GitHub UserContent Links (soon to be replaced with CloudFlare R2 Storage)


## AI Usage

I used Cascade Code by Windsurf to give me line autocomplete, and GitHub Copilot to help with bugfixing.

Please note that no AI was used in the creation of the UI or other design-focused decisions.

## Installation


```bash
cd sonora
npm install
npm run dev
```

## FAQ

### Why are you migrating to CloudFlare R2?

It's a lot faster, and is automatable so anytime I push a new release I can have the website update.

### Why the Aurora BG Effect

I honestly chose it because it looks pretty and has pastel colors that are pretty to me.

### Why are you using GSAP for animations?

I considered trying framer motion, but as this is a small website, I wanted to use something I was already familiar with.

### Why did you use transparent glass cards?

I was debating between a few options, but I thought they looked the nicest in contrast to the aurora in the background.

## License

GPL v3.0

Hey, just a reminder that this is a licence for the website, not Sonora Music itself.