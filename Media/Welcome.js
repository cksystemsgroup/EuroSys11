// Created by iWeb 3.0.1 local-build-20100318

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({reflection_2:new IWReflection({opacity:0.60,offset:1.00}),reflection_0:new IWReflection({opacity:0.24,offset:0.13}),stroke_0:new IWStrokeParts([{rect:new IWRect(-2,1,3,78),url:'Images/stroke.png'},{rect:new IWRect(-2,-2,0,0),url:null},{rect:new IWRect(1,-2,179,3),url:'Images/stroke_1.png'},{rect:new IWRect(180,-2,3,3),url:'Images/stroke_2.png'},{rect:new IWRect(180,1,3,78),url:'Images/stroke_3.png'},{rect:new IWRect(180,79,3,3),url:'Images/stroke_4.png'},{rect:new IWRect(1,79,179,3),url:'Images/stroke_5.png'},{rect:new IWRect(-2,79,3,3),url:'Images/stroke_6.png'}],new IWSize(182,81)),reflection_1:new IWReflection({opacity:0.50,offset:1.00})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Media/styleMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');fixAllIEPNGs('Media/transparent.gif');applyEffects()}

function showStuff(id) {
		if(document.getElementById(id).style.display == 'block')
			document.getElementById(id).style.display = 'none';
		else
			document.getElementById(id).style.display = 'block';
		
}
