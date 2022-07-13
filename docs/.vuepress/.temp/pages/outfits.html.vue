<template><div><h1 id="outfits" tabindex="-1"><a class="header-anchor" href="#outfits" aria-hidden="true">#</a> Outfits</h1>
<p><strong>Outfits</strong> can be equipped by using the <code v-pre>outfit</code> command in the <strong>Cmdr</strong> console and <em>eventually</em> also in the player's inventory GUI. Outfits are essentially a blueprint the game uses to weld Parts onto Wavebot's body.</p>
<p>This page includes general information on outfits. Also see: <a href="">Creating a new Outfit</a></p>
<h2 id="command" tabindex="-1"><a class="header-anchor" href="#command" aria-hidden="true">#</a> Command</h2>
<p>To equip an outfit piece, use the <strong>Cmdr</strong> console, hotkey is <code v-pre>F2</code>, and type in the command of the form:</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>outfit outfitType:outfitName
</code></pre></div><p>To unequip, replace <strong>outfitName</strong> with <strong>None</strong>:</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>outfit outfitType:None
</code></pre></div><h2 id="location-in-studio" tabindex="-1"><a class="header-anchor" href="#location-in-studio" aria-hidden="true">#</a> Location in Studio</h2>
<p>In Roblox Studio, outfits are located in:
<code v-pre>ServerScriptService.MD_Engine.ReplicatedStorage.EngineStorage.Outfits</code></p>
<p>See the image for reference.</p>
<h2 id="outfit-type" tabindex="-1"><a class="header-anchor" href="#outfit-type" aria-hidden="true">#</a> Outfit Type</h2>
<p>The folders directly in the <strong>Outfits</strong> folder are the outfit <strong>types</strong>. Every outfit is stored in one of these folders, which determines its <strong>type</strong>. In the image, you can see <code v-pre>Bottom</code>, <code v-pre>Gizmo</code>, <code v-pre>Hat</code>, and a few others. These are outfit <strong>types</strong>.</p>
<div class="custom-container warning"><p class="custom-container-title">NOTE: Outfits must have a type</p>
<p>Every outfit piece has an associated <strong>type</strong>. No outfit pieces can exist without a type.</p>
</div>
<div class="custom-container warning"><p class="custom-container-title">NOTE: Types do not determine body placement</p>
<p>The outfit type does not determine where it goes on Wavebot, or what body parts it is welded to! That's entirely up to each individual outfit piece to decide!</p>
</div>
<h3 id="exclusivity" tabindex="-1"><a class="header-anchor" href="#exclusivity" aria-hidden="true">#</a> Exclusivity</h3>
<p>You can only wear <strong>one</strong> outfit of a type at once. When equipping an outfit, if you already have one equipped of that <strong>type</strong>, it will be unequipped automatically. <strong>This is all the type does</strong>, it's actually the only reason types exist at all!</p>
<h2 id="skin-tag" tabindex="-1"><a class="header-anchor" href="#skin-tag" aria-hidden="true">#</a> Skin tag</h2>
<p>You may want to have an outfit match the player's currently equipped skin. That is done using the <strong>Skin</strong> tag.</p>
<p><strong>MeshParts</strong> with the <strong>Skin</strong> tag in an <strong>Outfit</strong> will use the <code v-pre>TextureID</code> of the player's equipped skin and/or the <code v-pre>SurfaceAppearance</code>.</p>
<p><strong>ParticleEmitters</strong> with the <strong>Skin</strong> tag in an <strong>Outfit</strong> will have their <code v-pre>Color</code> property set to match the <code v-pre>UIGradient</code> assigned to the player's equipped skin.</p>
<hr>
<p>Also see: <a href="">Creating a new Outfit</a></p>
</div></template>
