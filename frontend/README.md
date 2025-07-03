# 🗺️ D&D Map Generator

> **Forge epic landscapes for your adventures!** 
> 
> A dual-engine terrain generator that creates stunning D&D maps using both SVG filter distortion and procedural noise algorithms.

![D&D Map Generator](https://img.shields.io/badge/D%26D-Map%20Generator-purple?style=for-the-badge&logo=d3dotjs)
![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## ✨ Features

### 🎨 **Dual Generation Engines**
- **SVG Filter Generator** - Creates organic coastlines with distorted borders using turbulence filters
- **Canvas Noise Generator** - Generates realistic terrain biomes using fractal noise algorithms

### 🎛️ **Real-time Controls**
- **Base Frequency** - Controls terrain detail and noise scale
- **Octaves** - Adjusts complexity and layering
- **Seed** - Generate completely different worlds
- **Scale/Distortion** - Fine-tune the effect intensity

### 🌍 **Terrain Types**
- 🌊 **Oceans & Lakes** - Deep blue waters and coastlines
- 🏖️ **Beaches & Shores** - Sandy coastal transitions  
- 🌿 **Grasslands & Plains** - Rolling green landscapes
- 🌲 **Forests** - Dense woodland areas
- 🏔️ **Mountains & Hills** - Elevated rocky terrain

## 🚀 Quick Start

```bash
# Clone the repository
git clone <your-repo-url>
cd dnd-map-generator

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) and start generating worlds!

## 🏗️ Project Structure

```text
dnd-map-generator/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── generator/
│   │   │   ├── GeneratorApp.tsx          # Main app wrapper
│   │   │   ├── GeneratorContext.tsx      # State management
│   │   │   ├── GeneratorOptions.tsx      # Control panel
│   │   │   ├── MapDisplay.tsx            # Display wrapper
│   │   │   ├── SVGMapGenerator.tsx       # SVG filter engine
│   │   │   └── TerrainGenerator.tsx      # Canvas noise engine
│   │   ├── ui/
│   │   │   └── GenericCard.tsx           # Reusable card component
│   │   └── Navbar.astro                  # Navigation
│   ├── pages/
│   │   ├── index.astro                   # Landing page
│   │   └── map-generator.astro           # Generator page
│   └── layouts/
│       └── Layout.astro                  # Base layout
└── package.json
```

## 🎮 How to Use

1. **Choose Your Generator**
   - Click **SVG Filter** for organic, fantasy-style maps with distorted coastlines
   - Click **Canvas Noise** for realistic terrain with distinct biomes

2. **Adjust Parameters**
   - **Base Frequency**: Lower = larger features, Higher = more detailed
   - **Octaves**: More octaves = more complex terrain
   - **Seed**: Change for completely different layouts
   - **Scale**: Controls distortion intensity (SVG) or terrain scale (Canvas)

3. **Generate & Iterate**
   - Parameters update in real-time
   - Switch between generators to compare styles
   - Each generator remembers its own settings

## 🔧 Technical Details

### SVG Filter Generator
Uses `feTurbulence` and `feDisplacementMap` SVG filters to create organic, distorted borders around nested div elements representing different terrain types.

### Canvas Noise Generator  
Implements fractal noise with interpolation to generate smooth, realistic terrain heightmaps that are then colored based on elevation thresholds.

## 🎯 Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally |
| `npm run astro` | Run Astro CLI commands |

## 🌟 Future Features

- 🏰 **Settlement Generation** - Add villages, cities, and roads
- 🗺️ **Export Options** - Save maps as PNG, SVG, or PDF
- 🎲 **Random Encounters** - Generate location-based encounters
- 🔀 **Map Linking** - Connect multiple maps for campaigns
- 🎨 **Custom Themes** - Different visual styles and color palettes

## 🤝 Contributing

Got ideas for new terrain types or generation algorithms? Contributions are welcome!

## 📜 License

Created for the D&D community with ⚔️ and ✨

---

*May your campaigns be epic and your worlds endless!* 🐉
