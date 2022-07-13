# Outfits
**Outfits** can be equipped by using the `outfit` command in the **Cmdr** console and *eventually* also in the player's inventory GUI. Outfits are essentially a blueprint the game uses to weld Parts onto Wavebot's body.  
  
This page includes general information on outfits. For how to create a new outfit, see [Creating a new Outfit](../tutorials/create-new-outfit)

## Command
To equip an outfit piece, use the **Cmdr** console, hotkey is `F2`, and type in the command of the form:  
```:no-line-numbers
outfit outfitType:outfitName
``` 
    
To unequip, replace **outfitName** with **None**:  
```:no-line-numbers
outfit outfitType:None
```

## Location in Studio
In Roblox Studio, outfits are located in:
`ServerScriptService.MD_Engine.ReplicatedStorage.EngineStorage.Outfits`
  
See the image for reference.

## Outfit Type
The folders directly in the **Outfits** folder are the outfit **types**. Every outfit is stored in one of these folders, which determines its **type**. In the image, you can see `Bottom`, `Gizmo`, `Hat`, and a few others. These are outfit **types**.

:::warning NOTE
Every outfit piece has an associated **type**. No outfit pieces can exist without a type.
:::

:::warning NOTE
The outfit type does not determine where it goes on Wavebot, or what body parts it is welded to! That's entirely up to each individual outfit piece to decide!
:::

### Exclusivity
You can only wear **one** outfit of a type at once. When equipping an outfit, if you already have one equipped of that **type**, it will be unequipped automatically. **This is all the type does**, it's actually the only reason types exist at all!

## Skin tag
You may want to have an outfit match the player's currently equipped skin. That is done using the **Skin** tag.
  
**MeshParts** with the **Skin** tag in an **Outfit** will use the `TextureID` of the player's equipped skin and/or the `SurfaceAppearance`.  
  
**ParticleEmitters** with the **Skin** tag in an **Outfit** will have their `Color` property set to match the `UIGradient` assigned to the player's equipped skin.
  
----------------------------------- 
Also see: [Creating a new Outfit](../tutorials/create-new-outfit)