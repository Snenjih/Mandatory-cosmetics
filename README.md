# Mandatory Cosmetics

Asset server for the [MandatoryMod](https://github.com/Snenjih/Mandatory) Minecraft Fabric client mod.

## How it works

The mod fetches `manifest.json` on startup and delta-syncs changed assets to the local cache.

## Manifest URL

```
https://snenjih.github.io/Mandatory-cosmetics/cosmetics/manifest.json
```

## Adding cosmetics

See the [documentation](./docs/) for full guides on adding each cosmetic type.

## Structure

- `cosmetics/manifest.json` — catalog of all cosmetics with SHA256 hashes
- `cosmetics/assets/` — texture and model files
