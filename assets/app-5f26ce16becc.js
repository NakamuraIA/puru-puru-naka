var fu=0,Ga=1,pu=2;var Jl=1,mu=2,cn=3,Pn=0,St=1,un=2,Cn=0,bi=1,Wa=2,Xa=3,qa=4,gu=5,Wn=100,yu=101,xu=102,_u=103,vu=104,Mu=200,bu=201,Su=202,Eu=203,Js=204,$s=205,wu=206,Tu=207,Au=208,Cu=209,Ru=210,Pu=211,Iu=212,Lu=213,Du=214,Ks=0,js=1,Qs=2,Ti=3,eo=4,to=5,no=6,io=7,$l=0,Uu=1,Fu=2,Rn=0,Nu=1,Ou=2,Bu=3,zu=4,ku=5,Hu=6,da=7;var Kl=300,Ai=301,Ci=302,ro=303,so=304,as=306,oo=1e3,Yn=1001,ao=1002,Wt=1003,Vu=1004;var gr=1005;var Kt=1006,_s=1007;var Zn=1008;var pn=1009,jl=1010,Ql=1011,rr=1012,fa=1013,Jn=1014,hn=1015,ti=1016,pa=1017,ma=1018,Ri=1020,ec=35902,tc=1021,nc=1022,Gt=1023,ic=1024,rc=1025,Si=1026,Pi=1027,sc=1028,ga=1029,oc=1030,ya=1031;var xa=1033,Br=33776,zr=33777,kr=33778,Hr=33779,lo=35840,co=35841,uo=35842,ho=35843,fo=36196,po=37492,mo=37496,go=37808,yo=37809,xo=37810,_o=37811,vo=37812,Mo=37813,bo=37814,So=37815,Eo=37816,wo=37817,To=37818,Ao=37819,Co=37820,Ro=37821,Vr=36492,Po=36494,Io=36495,ac=36283,Lo=36284,Do=36285,Uo=36286;var Gr=2300,Fo=2301,vs=2302,Ya=2400,Za=2401,Ja=2402;var Gu=3200,Wu=3201;var lc=0,Xu=1,$t="",pt="srgb",Ni="srgb-linear",ls="linear",et="srgb";var oi=7680;var $a=519,qu=512,Yu=513,Zu=514,cc=515,Ju=516,$u=517,Ku=518,ju=519,Ka=35044,_a=35048;var ja="300 es",dn=2e3,Wr=2001,In=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qa=1234567,tr=Math.PI/180,sr=180/Math.PI;function Oi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vt[i&255]+vt[i>>8&255]+vt[i>>16&255]+vt[i>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[n&255]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]).toLowerCase()}function bt(i,e,t){return Math.max(e,Math.min(t,i))}function va(i,e){return(i%e+e)%e}function Qu(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function eh(i,e,t){return i!==e?(t-i)/(e-i):0}function nr(i,e,t){return(1-t)*i+t*e}function th(i,e,t,n){return nr(i,e,1-Math.exp(-t*n))}function nh(i,e=1){return e-Math.abs(va(i,e*2)-e)}function ih(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function rh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function sh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function oh(i,e){return i+Math.random()*(e-i)}function ah(i){return i*(.5-Math.random())}function lh(i){i!==void 0&&(Qa=i);let e=Qa+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ch(i){return i*tr}function uh(i){return i*sr}function hh(i){return(i&i-1)===0&&i!==0}function dh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function fh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ph(i,e,t,n,r){let s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),u=o((e+n)/2),f=s((e-n)/2),h=o((e-n)/2),p=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*u,c*f,c*h,a*l);break;case"YZY":i.set(c*h,a*u,c*f,a*l);break;case"ZXZ":i.set(c*f,c*h,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*p,a*l);break;case"YXY":i.set(c*p,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function vi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Et(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ma={DEG2RAD:tr,RAD2DEG:sr,generateUUID:Oi,clamp:bt,euclideanModulo:va,mapLinear:Qu,inverseLerp:eh,lerp:nr,damp:th,pingpong:nh,smoothstep:ih,smootherstep:rh,randInt:sh,randFloat:oh,randFloatSpread:ah,seededRandom:lh,degToRad:ch,radToDeg:uh,isPowerOfTwo:hh,ceilPowerOfTwo:dh,floorPowerOfTwo:fh,setQuaternionFromProperEuler:ph,normalize:Et,denormalize:vi},Fe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ze=class i{constructor(e,t,n,r,s,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l)}set(e,t,n,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],p=n[5],g=n[8],_=r[0],m=r[3],d=r[6],v=r[1],M=r[4],S=r[7],R=r[2],b=r[5],w=r[8];return s[0]=o*_+a*v+c*R,s[3]=o*m+a*M+c*b,s[6]=o*d+a*S+c*w,s[1]=l*_+u*v+f*R,s[4]=l*m+u*M+f*b,s[7]=l*d+u*S+f*w,s[2]=h*_+p*v+g*R,s[5]=h*m+p*M+g*b,s[8]=h*d+p*S+g*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=u*o-a*l,h=a*c-u*s,p=l*s-o*c,g=t*f+n*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=f*_,e[1]=(r*l-u*n)*_,e[2]=(a*n-r*o)*_,e[3]=h*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ms.makeScale(e,t)),this}rotate(e){return this.premultiply(Ms.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ms.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ms=new ze;function uc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function mh(){let i=Xr("canvas");return i.style.display="block",i}var el={};function Qi(i){i in el||(el[i]=!0,console.warn(i))}function gh(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function yh(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function xh(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Xe={enabled:!0,workingColorSpace:Ni,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===et&&(i.r=fn(i.r),i.g=fn(i.g),i.b=fn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===et&&(i.r=Ei(i.r),i.g=Ei(i.g),i.b=Ei(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===$t?ls:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function fn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ei(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var tl=[.64,.33,.3,.6,.15,.06],nl=[.2126,.7152,.0722],il=[.3127,.329],rl=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sl=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Xe.define({[Ni]:{primaries:tl,whitePoint:il,transfer:ls,toXYZ:rl,fromXYZ:sl,luminanceCoefficients:nl,workingColorSpaceConfig:{unpackColorSpace:pt},outputColorSpaceConfig:{drawingBufferColorSpace:pt}},[pt]:{primaries:tl,whitePoint:il,transfer:et,toXYZ:rl,fromXYZ:sl,luminanceCoefficients:nl,outputColorSpaceConfig:{drawingBufferColorSpace:pt}}});var ai,No=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ai===void 0&&(ai=Xr("canvas")),ai.width=e.width,ai.height=e.height;let n=ai.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ai}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Xr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=fn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fn(t[n]/255)*255):t[n]=fn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},_h=0,qr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=Oi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(bs(r[o].image)):s.push(bs(r[o]))}else s=bs(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function bs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?No.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var vh=0,Dt=class i extends In{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Yn,r=Yn,s=Kt,o=Zn,a=Gt,c=pn,l=i.DEFAULT_ANISOTROPY,u=$t){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vh++}),this.uuid=Oi(),this.name="",this.source=new qr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oo:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case ao:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oo:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case ao:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=Kl;Dt.DEFAULT_ANISOTROPY=1;var qe=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,l=c[0],u=c[4],f=c[8],h=c[1],p=c[5],g=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,S=(p+1)/2,R=(d+1)/2,b=(u+h)/4,w=(f+_)/4,A=(g+m)/4;return M>S&&M>R?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=b/n,s=w/n):S>R?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=b/r,s=A/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=w/s,r=A/s),this.set(n,r,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-_)/v,this.z=(h-u)/v,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Oo=class extends In{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new qe(0,0,e,t),this.scissorTest=!1,this.viewport=new qe(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new Dt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new qr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xt=class extends Oo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Yr=class extends Dt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Bo=class extends Dt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ln=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],u=n[r+2],f=n[r+3],h=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(f!==_||c!==h||l!==p||u!==g){let m=1-a,d=c*h+l*p+u*g+f*_,v=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){let R=Math.sqrt(M),b=Math.atan2(R,d*v);m=Math.sin(m*b)/R,a=Math.sin(a*b)/R}let S=a*v;if(c=c*m+h*S,l=l*m+p*S,u=u*m+g*S,f=f*m+_*S,m===1-a){let R=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=R,l*=R,u*=R,f*=R}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],c=n[r+1],l=n[r+2],u=n[r+3],f=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*f+c*p-l*h,e[t+1]=c*g+u*h+l*f-a*p,e[t+2]=l*g+u*p+a*h-c*f,e[t+3]=u*g-a*f-c*h-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(r/2),f=a(s/2),h=c(n/2),p=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=h*u*f+l*p*g,this._y=l*p*f-h*u*g,this._z=l*u*g+h*p*f,this._w=l*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+l*p*g,this._y=l*p*f-h*u*g,this._z=l*u*g-h*p*f,this._w=l*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-l*p*g,this._y=l*p*f+h*u*g,this._z=l*u*g+h*p*f,this._w=l*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-l*p*g,this._y=l*p*f+h*u*g,this._z=l*u*g-h*p*f,this._w=l*u*f+h*p*g;break;case"YZX":this._x=h*u*f+l*p*g,this._y=l*p*f+h*u*g,this._z=l*u*g-h*p*f,this._w=l*u*f-h*p*g;break;case"XZY":this._x=h*u*f-l*p*g,this._y=l*p*f-h*u*g,this._z=l*u*g+h*p*f,this._w=l*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(n>a&&n>f){let p=2*Math.sqrt(1+n-a-f);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>f){let p=2*Math.sqrt(1+a-n-f);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+f-n-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-r*a,this._w=o*u-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ol.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ol.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*n),u=2*(a*t-s*r),f=2*(s*n-o*t);return this.x=t+c*l+o*f-a*u,this.y=n+c*u+a*l-s*f,this.z=r+c*f+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ss.copy(this).projectOnVector(e),this.sub(Ss)}reflect(e){return this.sub(Ss.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ss=new N,ol=new Ln,$n=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,kt):kt.fromBufferAttribute(s,o),kt.applyMatrix4(e.matrixWorld),this.expandByPoint(kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),yr.copy(n.boundingBox)),yr.applyMatrix4(e.matrixWorld),this.union(yr)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kt),kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zi),xr.subVectors(this.max,Zi),li.subVectors(e.a,Zi),ci.subVectors(e.b,Zi),ui.subVectors(e.c,Zi),Mn.subVectors(ci,li),bn.subVectors(ui,ci),On.subVectors(li,ui);let t=[0,-Mn.z,Mn.y,0,-bn.z,bn.y,0,-On.z,On.y,Mn.z,0,-Mn.x,bn.z,0,-bn.x,On.z,0,-On.x,-Mn.y,Mn.x,0,-bn.y,bn.x,0,-On.y,On.x,0];return!Es(t,li,ci,ui,xr)||(t=[1,0,0,0,1,0,0,0,1],!Es(t,li,ci,ui,xr))?!1:(_r.crossVectors(Mn,bn),t=[_r.x,_r.y,_r.z],Es(t,li,ci,ui,xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},rn=[new N,new N,new N,new N,new N,new N,new N,new N],kt=new N,yr=new $n,li=new N,ci=new N,ui=new N,Mn=new N,bn=new N,On=new N,Zi=new N,xr=new N,_r=new N,Bn=new N;function Es(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Bn.fromArray(i,s);let a=r.x*Math.abs(Bn.x)+r.y*Math.abs(Bn.y)+r.z*Math.abs(Bn.z),c=e.dot(Bn),l=t.dot(Bn),u=n.dot(Bn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var Mh=new $n,Ji=new N,ws=new N,Kn=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Mh.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ji.subVectors(e,this.center);let t=Ji.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ji,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ws.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ji.copy(e.center).add(ws)),this.expandByPoint(Ji.copy(e.center).sub(ws))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},sn=new N,Ts=new N,vr=new N,Sn=new N,As=new N,Mr=new N,Cs=new N,Zr=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sn.copy(this.origin).addScaledVector(this.direction,t),sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ts.copy(e).add(t).multiplyScalar(.5),vr.copy(t).sub(e).normalize(),Sn.copy(this.origin).sub(Ts);let s=e.distanceTo(t)*.5,o=-this.direction.dot(vr),a=Sn.dot(this.direction),c=-Sn.dot(vr),l=Sn.lengthSq(),u=Math.abs(1-o*o),f,h,p,g;if(u>0)if(f=o*c-a,h=o*a-c,g=s*u,f>=0)if(h>=-g)if(h<=g){let _=1/u;f*=_,h*=_,p=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*c)+l;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*c)+l;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+h*(h+2*c)+l):h<=g?(f=0,h=Math.min(Math.max(-s,-c),s),p=h*(h+2*c)+l):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+h*(h+2*c)+l);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ts).addScaledVector(vr,h),p}intersectSphere(e,t){sn.subVectors(e.center,this.origin);let n=sn.dot(this.direction),r=sn.dot(sn)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,sn)!==null}intersectTriangle(e,t,n,r,s){As.subVectors(t,e),Mr.subVectors(n,e),Cs.crossVectors(As,Mr);let o=this.direction.dot(Cs),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Sn.subVectors(this.origin,e);let c=a*this.direction.dot(Mr.crossVectors(Sn,Mr));if(c<0)return null;let l=a*this.direction.dot(As.cross(Sn));if(l<0||c+l>o)return null;let u=-a*Sn.dot(Cs);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},it=class i{constructor(e,t,n,r,s,o,a,c,l,u,f,h,p,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l,u,f,h,p,g,_,m)}set(e,t,n,r,s,o,a,c,l,u,f,h,p,g,_,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/hi.setFromMatrixColumn(e,0).length(),s=1/hi.setFromMatrixColumn(e,1).length(),o=1/hi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let h=o*u,p=o*f,g=a*u,_=a*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=p+g*l,t[5]=h-_*l,t[9]=-a*c,t[2]=_-h*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){let h=c*u,p=c*f,g=l*u,_=l*f;t[0]=h+_*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=_+h*a,t[10]=o*c}else if(e.order==="ZXY"){let h=c*u,p=c*f,g=l*u,_=l*f;t[0]=h-_*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let h=o*u,p=o*f,g=a*u,_=a*f;t[0]=c*u,t[4]=g*l-p,t[8]=h*l+_,t[1]=c*f,t[5]=_*l+h,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let h=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-h*f,t[8]=g*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*f+g,t[10]=h-_*f}else if(e.order==="XZY"){let h=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=h*f+_,t[5]=o*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bh,e,Sh)}lookAt(e,t,n){let r=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),En.crossVectors(n,It),En.lengthSq()===0&&(Math.abs(n.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),En.crossVectors(n,It)),En.normalize(),br.crossVectors(It,En),r[0]=En.x,r[4]=br.x,r[8]=It.x,r[1]=En.y,r[5]=br.y,r[9]=It.y,r[2]=En.z,r[6]=br.z,r[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],v=n[3],M=n[7],S=n[11],R=n[15],b=r[0],w=r[4],A=r[8],x=r[12],y=r[1],C=r[5],L=r[9],D=r[13],F=r[2],B=r[6],P=r[10],O=r[14],U=r[3],W=r[7],$=r[11],j=r[15];return s[0]=o*b+a*y+c*F+l*U,s[4]=o*w+a*C+c*B+l*W,s[8]=o*A+a*L+c*P+l*$,s[12]=o*x+a*D+c*O+l*j,s[1]=u*b+f*y+h*F+p*U,s[5]=u*w+f*C+h*B+p*W,s[9]=u*A+f*L+h*P+p*$,s[13]=u*x+f*D+h*O+p*j,s[2]=g*b+_*y+m*F+d*U,s[6]=g*w+_*C+m*B+d*W,s[10]=g*A+_*L+m*P+d*$,s[14]=g*x+_*D+m*O+d*j,s[3]=v*b+M*y+S*F+R*U,s[7]=v*w+M*C+S*B+R*W,s[11]=v*A+M*L+S*P+R*$,s[15]=v*x+M*D+S*O+R*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+s*c*f-r*l*f-s*a*h+n*l*h+r*a*p-n*c*p)+_*(+t*c*p-t*l*h+s*o*h-r*o*p+r*l*u-s*c*u)+m*(+t*l*f-t*a*p-s*o*f+n*o*p+s*a*u-n*l*u)+d*(-r*a*u-t*c*f+t*a*h+r*o*f-n*o*h+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],v=f*m*l-_*h*l+_*c*p-a*m*p-f*c*d+a*h*d,M=g*h*l-u*m*l-g*c*p+o*m*p+u*c*d-o*h*d,S=u*_*l-g*f*l+g*a*p-o*_*p-u*a*d+o*f*d,R=g*f*c-u*_*c-g*a*h+o*_*h+u*a*m-o*f*m,b=t*v+n*M+r*S+s*R;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/b;return e[0]=v*w,e[1]=(_*h*s-f*m*s-_*r*p+n*m*p+f*r*d-n*h*d)*w,e[2]=(a*m*s-_*c*s+_*r*l-n*m*l-a*r*d+n*c*d)*w,e[3]=(f*c*s-a*h*s-f*r*l+n*h*l+a*r*p-n*c*p)*w,e[4]=M*w,e[5]=(u*m*s-g*h*s+g*r*p-t*m*p-u*r*d+t*h*d)*w,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*d-t*c*d)*w,e[7]=(o*h*s-u*c*s+u*r*l-t*h*l-o*r*p+t*c*p)*w,e[8]=S*w,e[9]=(g*f*s-u*_*s-g*n*p+t*_*p+u*n*d-t*f*d)*w,e[10]=(o*_*s-g*a*s+g*n*l-t*_*l-o*n*d+t*a*d)*w,e[11]=(u*a*s-o*f*s-u*n*l+t*f*l+o*n*p-t*a*p)*w,e[12]=R*w,e[13]=(u*_*r-g*f*r+g*n*h-t*_*h-u*n*m+t*f*m)*w,e[14]=(g*a*r-o*_*r-g*n*c+t*_*c+o*n*m-t*a*m)*w,e[15]=(o*f*r-u*a*r+u*n*c-t*f*c-o*n*h+t*a*h)*w,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+n,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,f=a+a,h=s*l,p=s*u,g=s*f,_=o*u,m=o*f,d=a*f,v=c*l,M=c*u,S=c*f,R=n.x,b=n.y,w=n.z;return r[0]=(1-(_+d))*R,r[1]=(p+S)*R,r[2]=(g-M)*R,r[3]=0,r[4]=(p-S)*b,r[5]=(1-(h+d))*b,r[6]=(m+v)*b,r[7]=0,r[8]=(g+M)*w,r[9]=(m-v)*w,r[10]=(1-(h+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=hi.set(r[0],r[1],r[2]).length(),o=hi.set(r[4],r[5],r[6]).length(),a=hi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ht.copy(this);let l=1/s,u=1/o,f=1/a;return Ht.elements[0]*=l,Ht.elements[1]*=l,Ht.elements[2]*=l,Ht.elements[4]*=u,Ht.elements[5]*=u,Ht.elements[6]*=u,Ht.elements[8]*=f,Ht.elements[9]*=f,Ht.elements[10]*=f,t.setFromRotationMatrix(Ht),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=dn){let c=this.elements,l=2*s/(t-e),u=2*s/(n-r),f=(t+e)/(t-e),h=(n+r)/(n-r),p,g;if(a===dn)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Wr)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=dn){let c=this.elements,l=1/(t-e),u=1/(n-r),f=1/(o-s),h=(t+e)*l,p=(n+r)*u,g,_;if(a===dn)g=(o+s)*f,_=-2*f;else if(a===Wr)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},hi=new N,Ht=new it,bh=new N(0,0,0),Sh=new N(1,1,1),En=new N,br=new N,It=new N,al=new it,ll=new Ln,jt=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-bt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(bt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return al.makeRotationFromQuaternion(e),this.setFromRotationMatrix(al,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ll.setFromEuler(this),this.setFromQuaternion(ll,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};jt.DEFAULT_ORDER="XYZ";var or=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Eh=0,cl=new N,di=new Ln,on=new it,Sr=new N,$i=new N,wh=new N,Th=new Ln,ul=new N(1,0,0),hl=new N(0,1,0),dl=new N(0,0,1),fl={type:"added"},Ah={type:"removed"},fi={type:"childadded",child:null},Rs={type:"childremoved",child:null},At=class i extends In{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new N,t=new jt,n=new Ln,r=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new it},normalMatrix:{value:new ze}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new or,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.multiply(di),this}rotateOnWorldAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.premultiply(di),this}rotateX(e){return this.rotateOnAxis(ul,e)}rotateY(e){return this.rotateOnAxis(hl,e)}rotateZ(e){return this.rotateOnAxis(dl,e)}translateOnAxis(e,t){return cl.copy(e).applyQuaternion(this.quaternion),this.position.add(cl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ul,e)}translateY(e){return this.translateOnAxis(hl,e)}translateZ(e){return this.translateOnAxis(dl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(on.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Sr.copy(e):Sr.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),$i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?on.lookAt($i,Sr,this.up):on.lookAt(Sr,$i,this.up),this.quaternion.setFromRotationMatrix(on),r&&(on.extractRotation(r.matrixWorld),di.setFromRotationMatrix(on),this.quaternion.premultiply(di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fl),fi.child=e,this.dispatchEvent(fi),fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ah),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),on.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),on.multiply(e.parent.matrixWorld)),e.applyMatrix4(on),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fl),fi.child=e,this.dispatchEvent(fi),fi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,e,wh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,Th,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};At.DEFAULT_UP=new N(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Vt=new N,an=new N,Ps=new N,ln=new N,pi=new N,mi=new N,pl=new N,Is=new N,Ls=new N,Ds=new N,Us=new qe,Fs=new qe,Ns=new qe,Xn=class i{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Vt.subVectors(e,t),r.cross(Vt);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Vt.subVectors(r,t),an.subVectors(n,t),Ps.subVectors(e,t);let o=Vt.dot(Vt),a=Vt.dot(an),c=Vt.dot(Ps),l=an.dot(an),u=an.dot(Ps),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;let h=1/f,p=(l*c-a*u)*h,g=(o*u-a*c)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ln)===null?!1:ln.x>=0&&ln.y>=0&&ln.x+ln.y<=1}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,ln)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ln.x),c.addScaledVector(o,ln.y),c.addScaledVector(a,ln.z),c)}static getInterpolatedAttribute(e,t,n,r,s,o){return Us.setScalar(0),Fs.setScalar(0),Ns.setScalar(0),Us.fromBufferAttribute(e,t),Fs.fromBufferAttribute(e,n),Ns.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Us,s.x),o.addScaledVector(Fs,s.y),o.addScaledVector(Ns,s.z),o}static isFrontFacing(e,t,n,r){return Vt.subVectors(n,t),an.subVectors(e,t),Vt.cross(an).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vt.subVectors(this.c,this.b),an.subVectors(this.a,this.b),Vt.cross(an).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;pi.subVectors(r,n),mi.subVectors(s,n),Is.subVectors(e,n);let c=pi.dot(Is),l=mi.dot(Is);if(c<=0&&l<=0)return t.copy(n);Ls.subVectors(e,r);let u=pi.dot(Ls),f=mi.dot(Ls);if(u>=0&&f<=u)return t.copy(r);let h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(pi,o);Ds.subVectors(e,s);let p=pi.dot(Ds),g=mi.dot(Ds);if(g>=0&&p<=g)return t.copy(s);let _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(mi,a);let m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return pl.subVectors(s,r),a=(f-u)/(f-u+(p-g)),t.copy(r).addScaledVector(pl,a);let d=1/(m+_+h);return o=_*d,a=h*d,t.copy(n).addScaledVector(pi,o).addScaledVector(mi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},hc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},Er={h:0,s:0,l:0};function Os(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var we=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Xe.workingColorSpace){if(e=va(e,1),t=bt(t,0,1),n=bt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Os(o,s,e+1/3),this.g=Os(o,s,e),this.b=Os(o,s,e-1/3)}return Xe.toWorkingColorSpace(this,r),this}setStyle(e,t=pt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pt){let n=hc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fn(e.r),this.g=fn(e.g),this.b=fn(e.b),this}copyLinearToSRGB(e){return this.r=Ei(e.r),this.g=Ei(e.g),this.b=Ei(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pt){return Xe.fromWorkingColorSpace(Mt.copy(this),e),Math.round(bt(Mt.r*255,0,255))*65536+Math.round(bt(Mt.g*255,0,255))*256+Math.round(bt(Mt.b*255,0,255))}getHexString(e=pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.fromWorkingColorSpace(Mt.copy(this),t);let n=Mt.r,r=Mt.g,s=Mt.b,o=Math.max(n,r,s),a=Math.min(n,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=pt){Xe.fromWorkingColorSpace(Mt.copy(this),e);let t=Mt.r,n=Mt.g,r=Mt.b;return e!==pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(wn),this.setHSL(wn.h+e,wn.s+t,wn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wn),e.getHSL(Er);let n=nr(wn.h,Er.h,t),r=nr(wn.s,Er.s,t),s=nr(wn.l,Er.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mt=new we;we.NAMES=hc;var Ch=0,jn=class extends In{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=Oi(),this.name="",this.blending=bi,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Js,this.blendDst=$s,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=Ti,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$a,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oi,this.stencilZFail=oi,this.stencilZPass=oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bi&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Js&&(n.blendSrc=this.blendSrc),this.blendDst!==$s&&(n.blendDst=this.blendDst),this.blendEquation!==Wn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ti&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$a&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Nt=class extends jn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jt,this.combine=$l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var ct=new N,wr=new Fe,Rt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ka,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wr.fromBufferAttribute(this,t),wr.applyMatrix3(e),this.setXY(t,wr.x,wr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),r=Et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),r=Et(r,this.array),s=Et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ka&&(e.usage=this.usage),e}};var Jr=class extends Rt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var $r=class extends Rt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Tt=class extends Rt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Rh=0,Ft=new it,Bs=new At,gi=new N,Lt=new $n,Ki=new $n,ft=new N,mn=class i extends In{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uc(e)?$r:Jr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ft.makeRotationFromQuaternion(e),this.applyMatrix4(Ft),this}rotateX(e){return Ft.makeRotationX(e),this.applyMatrix4(Ft),this}rotateY(e){return Ft.makeRotationY(e),this.applyMatrix4(Ft),this}rotateZ(e){return Ft.makeRotationZ(e),this.applyMatrix4(Ft),this}translate(e,t,n){return Ft.makeTranslation(e,t,n),this.applyMatrix4(Ft),this}scale(e,t,n){return Ft.makeScale(e,t,n),this.applyMatrix4(Ft),this}lookAt(e){return Bs.lookAt(e),Bs.updateMatrix(),this.applyMatrix4(Bs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Tt(n,3))}else{for(let n=0,r=t.count;n<r;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $n);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Lt.setFromBufferAttribute(s),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,Lt.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,Lt.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(Lt.min),this.boundingBox.expandByPoint(Lt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if(Lt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Ki.setFromBufferAttribute(a),this.morphTargetsRelative?(ft.addVectors(Lt.min,Ki.min),Lt.expandByPoint(ft),ft.addVectors(Lt.max,Ki.max),Lt.expandByPoint(ft)):(Lt.expandByPoint(Ki.min),Lt.expandByPoint(Ki.max))}Lt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)ft.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(ft));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)ft.fromBufferAttribute(a,l),c&&(gi.fromBufferAttribute(e,l),ft.add(gi)),r=Math.max(r,n.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let A=0;A<n.count;A++)a[A]=new N,c[A]=new N;let l=new N,u=new N,f=new N,h=new Fe,p=new Fe,g=new Fe,_=new N,m=new N;function d(A,x,y){l.fromBufferAttribute(n,A),u.fromBufferAttribute(n,x),f.fromBufferAttribute(n,y),h.fromBufferAttribute(s,A),p.fromBufferAttribute(s,x),g.fromBufferAttribute(s,y),u.sub(l),f.sub(l),p.sub(h),g.sub(h);let C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(C),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(C),a[A].add(_),a[x].add(_),a[y].add(_),c[A].add(m),c[x].add(m),c[y].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let A=0,x=v.length;A<x;++A){let y=v[A],C=y.start,L=y.count;for(let D=C,F=C+L;D<F;D+=3)d(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let M=new N,S=new N,R=new N,b=new N;function w(A){R.fromBufferAttribute(r,A),b.copy(R);let x=a[A];M.copy(x),M.sub(R.multiplyScalar(R.dot(x))).normalize(),S.crossVectors(b,x);let C=S.dot(c[A])<0?-1:1;o.setXYZW(A,M.x,M.y,M.z,C)}for(let A=0,x=v.length;A<x;++A){let y=v[A],C=y.start,L=y.count;for(let D=C,F=C+L;D<F;D+=3)w(e.getX(D+0)),w(e.getX(D+1)),w(e.getX(D+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Rt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);let r=new N,s=new N,o=new N,a=new N,c=new N,l=new N,u=new N,f=new N;if(e)for(let h=0,p=e.count;h<p;h+=3){let g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u),p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*u;for(let d=0;d<u;d++)h[g++]=l[p++]}return new Rt(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,n);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,f=l.length;u<f;u++){let h=l[u],p=e(h,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){let p=l[f];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],f=s[l];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ml=new it,zn=new Zr,Tr=new Kn,gl=new N,Ar=new N,Cr=new N,Rr=new N,zs=new N,Pr=new N,yl=new N,Ir=new N,Ve=class extends At{constructor(e=new mn,t=new Nt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Pr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],f=s[c];u!==0&&(zs.fromBufferAttribute(f,e),o?Pr.addScaledVector(zs,u):Pr.addScaledVector(zs.sub(t),u))}t.add(Pr)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(s),zn.copy(e.ray).recast(e.near),!(Tr.containsPoint(zn.origin)===!1&&(zn.intersectSphere(Tr,gl)===null||zn.origin.distanceToSquared(gl)>(e.far-e.near)**2))&&(ml.copy(s).invert(),zn.copy(e.ray).applyMatrix4(ml),!(n.boundingBox!==null&&zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,zn)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){let m=h[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,R=M;S<R;S+=3){let b=a.getX(S),w=a.getX(S+1),A=a.getX(S+2);r=Lr(this,d,e,n,l,u,f,b,w,A),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){let v=a.getX(m),M=a.getX(m+1),S=a.getX(m+2);r=Lr(this,o,e,n,l,u,f,v,M,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){let m=h[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),M=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,R=M;S<R;S+=3){let b=S,w=S+1,A=S+2;r=Lr(this,d,e,n,l,u,f,b,w,A),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){let v=m,M=m+1,S=m+2;r=Lr(this,o,e,n,l,u,f,v,M,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function Ph(i,e,t,n,r,s,o,a){let c;if(e.side===St?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===Pn,a),c===null)return null;Ir.copy(a),Ir.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Ir);return l<t.near||l>t.far?null:{distance:l,point:Ir.clone(),object:i}}function Lr(i,e,t,n,r,s,o,a,c,l){i.getVertexPosition(a,Ar),i.getVertexPosition(c,Cr),i.getVertexPosition(l,Rr);let u=Ph(i,e,t,n,Ar,Cr,Rr,yl);if(u){let f=new N;Xn.getBarycoord(yl,Ar,Cr,Rr,f),r&&(u.uv=Xn.getInterpolatedAttribute(r,a,c,l,f,new Fe)),s&&(u.uv1=Xn.getInterpolatedAttribute(s,a,c,l,f,new Fe)),o&&(u.normal=Xn.getInterpolatedAttribute(o,a,c,l,f,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new N,materialIndex:0};Xn.getNormal(Ar,Cr,Rr,h.normal),u.face=h,u.barycoord=f}return u}var gn=class i extends mn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],f=[],h=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Tt(l,3)),this.setAttribute("normal",new Tt(u,3)),this.setAttribute("uv",new Tt(f,2));function g(_,m,d,v,M,S,R,b,w,A,x){let y=S/w,C=R/A,L=S/2,D=R/2,F=b/2,B=w+1,P=A+1,O=0,U=0,W=new N;for(let $=0;$<P;$++){let j=$*C-D;for(let re=0;re<B;re++){let _e=re*y-L;W[_]=_e*v,W[m]=j*M,W[d]=F,l.push(W.x,W.y,W.z),W[_]=0,W[m]=0,W[d]=b>0?1:-1,u.push(W.x,W.y,W.z),f.push(re/w),f.push(1-$/A),O+=1}}for(let $=0;$<A;$++)for(let j=0;j<w;j++){let re=h+j+B*$,_e=h+j+B*($+1),Z=h+(j+1)+B*($+1),G=h+(j+1)+B*$;c.push(re,_e,G),c.push(_e,Z,G),U+=6}a.addGroup(p,U,x),p+=U,h+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ii(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function wt(i){let e={};for(let t=0;t<i.length;t++){let n=Ii(i[t]);for(let r in n)e[r]=n[r]}return e}function Ih(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function dc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}var ba={clone:Ii,merge:wt},Lh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ot=class extends jn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lh,this.fragmentShader=Dh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ii(e.uniforms),this.uniformsGroups=Ih(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Kr=class extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=dn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Tn=new N,xl=new Fe,_l=new Fe,mt=class extends Kr{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=sr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(tr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sr*2*Math.atan(Math.tan(tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Tn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Tn.x,Tn.y).multiplyScalar(-e/Tn.z),Tn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tn.x,Tn.y).multiplyScalar(-e/Tn.z)}getViewSize(e,t){return this.getViewBounds(e,xl,_l),t.subVectors(_l,xl)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(tr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},yi=-90,xi=1,zo=class extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new mt(yi,xi,e,t);r.layers=this.layers,this.add(r);let s=new mt(yi,xi,e,t);s.layers=this.layers,this.add(s);let o=new mt(yi,xi,e,t);o.layers=this.layers,this.add(o);let a=new mt(yi,xi,e,t);a.layers=this.layers,this.add(a);let c=new mt(yi,xi,e,t);c.layers=this.layers,this.add(c);let l=new mt(yi,xi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===dn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},jr=class extends Dt{constructor(e,t,n,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Ai,super(e,t,n,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ko=class extends Xt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new jr(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new gn(5,5,5),s=new Ot({name:"CubemapFromEquirect",uniforms:Ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:St,blending:Cn});s.uniforms.tEquirect.value=t;let o=new Ve(r,s),a=t.minFilter;return t.minFilter===Zn&&(t.minFilter=Kt),new zo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}},ks=new N,Uh=new N,Fh=new ze,yt=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=ks.subVectors(n,t).cross(Uh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ks),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Fh.getNormalMatrix(e),r=this.coplanarPoint(ks).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},kn=new Kn,Dr=new N,ar=class{constructor(e=new yt,t=new yt,n=new yt,r=new yt,s=new yt,o=new yt){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=dn){let n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],f=r[6],h=r[7],p=r[8],g=r[9],_=r[10],m=r[11],d=r[12],v=r[13],M=r[14],S=r[15];if(n[0].setComponents(c-s,h-l,m-p,S-d).normalize(),n[1].setComponents(c+s,h+l,m+p,S+d).normalize(),n[2].setComponents(c+o,h+u,m+g,S+v).normalize(),n[3].setComponents(c-o,h-u,m-g,S-v).normalize(),n[4].setComponents(c-a,h-f,m-_,S-M).normalize(),t===dn)n[5].setComponents(c+a,h+f,m+_,S+M).normalize();else if(t===Wr)n[5].setComponents(a,f,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kn)}intersectsSprite(e){return kn.center.set(0,0,0),kn.radius=.7071067811865476,kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Dr.x=r.normal.x>0?e.max.x:e.min.x,Dr.y=r.normal.y>0?e.max.y:e.min.y,Dr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Dr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function fc(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Nh(i){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,f=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){let u=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,u);else{f.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<f.length;p++){let g=f[h],_=f[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let p=0,g=f.length;p<g;p++){let _=f[p];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Qt=class i extends mn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,u=c+1,f=e/a,h=t/c,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){let v=d*h-o;for(let M=0;M<l;M++){let S=M*f-s;g.push(S,-v,0),_.push(0,0,1),m.push(M/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let v=0;v<a;v++){let M=v+l*d,S=v+l*(d+1),R=v+1+l*(d+1),b=v+1+l*d;p.push(M,S,b),p.push(S,R,b)}this.setIndex(p),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(_,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Oh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,qh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$h=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Kh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Qh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ed=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,td=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,od=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ad=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ld=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ud=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fd="gl_FragColor = linearToOutputTexel( gl_FragColor );",pd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,md=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,gd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_d=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Md=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ed=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Td=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ad=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Rd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Pd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Id=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ld=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ud=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Fd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Nd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Od=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Bd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$d=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Qd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ef=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,of=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,af=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,df=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ff=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_f=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,vf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Mf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ef=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Af=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,If=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Uf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Nf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Of=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Wf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Xf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$f=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ep=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,np=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ip=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,op=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ap=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,up=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,dp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ne={alphahash_fragment:Oh,alphahash_pars_fragment:Bh,alphamap_fragment:zh,alphamap_pars_fragment:kh,alphatest_fragment:Hh,alphatest_pars_fragment:Vh,aomap_fragment:Gh,aomap_pars_fragment:Wh,batching_pars_vertex:Xh,batching_vertex:qh,begin_vertex:Yh,beginnormal_vertex:Zh,bsdfs:Jh,iridescence_fragment:$h,bumpmap_pars_fragment:Kh,clipping_planes_fragment:jh,clipping_planes_pars_fragment:Qh,clipping_planes_pars_vertex:ed,clipping_planes_vertex:td,color_fragment:nd,color_pars_fragment:id,color_pars_vertex:rd,color_vertex:sd,common:od,cube_uv_reflection_fragment:ad,defaultnormal_vertex:ld,displacementmap_pars_vertex:cd,displacementmap_vertex:ud,emissivemap_fragment:hd,emissivemap_pars_fragment:dd,colorspace_fragment:fd,colorspace_pars_fragment:pd,envmap_fragment:md,envmap_common_pars_fragment:gd,envmap_pars_fragment:yd,envmap_pars_vertex:xd,envmap_physical_pars_fragment:Rd,envmap_vertex:_d,fog_vertex:vd,fog_pars_vertex:Md,fog_fragment:bd,fog_pars_fragment:Sd,gradientmap_pars_fragment:Ed,lightmap_pars_fragment:wd,lights_lambert_fragment:Td,lights_lambert_pars_fragment:Ad,lights_pars_begin:Cd,lights_toon_fragment:Pd,lights_toon_pars_fragment:Id,lights_phong_fragment:Ld,lights_phong_pars_fragment:Dd,lights_physical_fragment:Ud,lights_physical_pars_fragment:Fd,lights_fragment_begin:Nd,lights_fragment_maps:Od,lights_fragment_end:Bd,logdepthbuf_fragment:zd,logdepthbuf_pars_fragment:kd,logdepthbuf_pars_vertex:Hd,logdepthbuf_vertex:Vd,map_fragment:Gd,map_pars_fragment:Wd,map_particle_fragment:Xd,map_particle_pars_fragment:qd,metalnessmap_fragment:Yd,metalnessmap_pars_fragment:Zd,morphinstance_vertex:Jd,morphcolor_vertex:$d,morphnormal_vertex:Kd,morphtarget_pars_vertex:jd,morphtarget_vertex:Qd,normal_fragment_begin:ef,normal_fragment_maps:tf,normal_pars_fragment:nf,normal_pars_vertex:rf,normal_vertex:sf,normalmap_pars_fragment:of,clearcoat_normal_fragment_begin:af,clearcoat_normal_fragment_maps:lf,clearcoat_pars_fragment:cf,iridescence_pars_fragment:uf,opaque_fragment:hf,packing:df,premultiplied_alpha_fragment:ff,project_vertex:pf,dithering_fragment:mf,dithering_pars_fragment:gf,roughnessmap_fragment:yf,roughnessmap_pars_fragment:xf,shadowmap_pars_fragment:_f,shadowmap_pars_vertex:vf,shadowmap_vertex:Mf,shadowmask_pars_fragment:bf,skinbase_vertex:Sf,skinning_pars_vertex:Ef,skinning_vertex:wf,skinnormal_vertex:Tf,specularmap_fragment:Af,specularmap_pars_fragment:Cf,tonemapping_fragment:Rf,tonemapping_pars_fragment:Pf,transmission_fragment:If,transmission_pars_fragment:Lf,uv_pars_fragment:Df,uv_pars_vertex:Uf,uv_vertex:Ff,worldpos_vertex:Nf,background_vert:Of,background_frag:Bf,backgroundCube_vert:zf,backgroundCube_frag:kf,cube_vert:Hf,cube_frag:Vf,depth_vert:Gf,depth_frag:Wf,distanceRGBA_vert:Xf,distanceRGBA_frag:qf,equirect_vert:Yf,equirect_frag:Zf,linedashed_vert:Jf,linedashed_frag:$f,meshbasic_vert:Kf,meshbasic_frag:jf,meshlambert_vert:Qf,meshlambert_frag:ep,meshmatcap_vert:tp,meshmatcap_frag:np,meshnormal_vert:ip,meshnormal_frag:rp,meshphong_vert:sp,meshphong_frag:op,meshphysical_vert:ap,meshphysical_frag:lp,meshtoon_vert:cp,meshtoon_frag:up,points_vert:hp,points_frag:dp,shadow_vert:fp,shadow_frag:pp,sprite_vert:mp,sprite_frag:gp},ae={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Jt={basic:{uniforms:wt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:wt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new we(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:wt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:wt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:wt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new we(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:wt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:wt([ae.points,ae.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:wt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:wt([ae.common,ae.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:wt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:wt([ae.sprite,ae.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:wt([ae.common,ae.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:wt([ae.lights,ae.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};Jt.physical={uniforms:wt([Jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};var Ur={r:0,b:0,g:0},Hn=new jt,yp=new it;function xp(i,e,t,n,r,s,o){let a=new we(0),c=s===!0?0:1,l,u,f=null,h=0,p=null;function g(v){let M=v.isScene===!0?v.background:null;return M&&M.isTexture&&(M=(v.backgroundBlurriness>0?t:e).get(M)),M}function _(v){let M=!1,S=g(v);S===null?d(a,c):S&&S.isColor&&(d(S,1),M=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,M){let S=g(M);S&&(S.isCubeTexture||S.mapping===as)?(u===void 0&&(u=new Ve(new gn(1,1,1),new Ot({name:"BackgroundCubeMaterial",uniforms:Ii(Jt.backgroundCube.uniforms),vertexShader:Jt.backgroundCube.vertexShader,fragmentShader:Jt.backgroundCube.fragmentShader,side:St,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Hn.copy(M.backgroundRotation),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(yp.makeRotationFromEuler(Hn)),u.material.toneMapped=Xe.getTransfer(S.colorSpace)!==et,(f!==S||h!==S.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,f=S,h=S.version,p=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Ve(new Qt(2,2),new Ot({name:"BackgroundMaterial",uniforms:Ii(Jt.background.uniforms),vertexShader:Jt.background.vertexShader,fragmentShader:Jt.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(S.colorSpace)!==et,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||h!==S.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,f=S,h=S.version,p=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function d(v,M){v.getRGB(Ur,dc(i)),n.buffers.color.setClear(Ur.r,Ur.g,Ur.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),c=M,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,d(a,c)},render:_,addToRenderList:m}}function _p(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null),s=r,o=!1;function a(y,C,L,D,F){let B=!1,P=f(D,L,C);s!==P&&(s=P,l(s.object)),B=p(y,D,L,F),B&&g(y,D,L,F),F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,S(y,C,L,D),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function f(y,C,L){let D=L.wireframe===!0,F=n[y.id];F===void 0&&(F={},n[y.id]=F);let B=F[C.id];B===void 0&&(B={},F[C.id]=B);let P=B[D];return P===void 0&&(P=h(c()),B[D]=P),P}function h(y){let C=[],L=[],D=[];for(let F=0;F<t;F++)C[F]=0,L[F]=0,D[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:L,attributeDivisors:D,object:y,attributes:{},index:null}}function p(y,C,L,D){let F=s.attributes,B=C.attributes,P=0,O=L.getAttributes();for(let U in O)if(O[U].location>=0){let $=F[U],j=B[U];if(j===void 0&&(U==="instanceMatrix"&&y.instanceMatrix&&(j=y.instanceMatrix),U==="instanceColor"&&y.instanceColor&&(j=y.instanceColor)),$===void 0||$.attribute!==j||j&&$.data!==j.data)return!0;P++}return s.attributesNum!==P||s.index!==D}function g(y,C,L,D){let F={},B=C.attributes,P=0,O=L.getAttributes();for(let U in O)if(O[U].location>=0){let $=B[U];$===void 0&&(U==="instanceMatrix"&&y.instanceMatrix&&($=y.instanceMatrix),U==="instanceColor"&&y.instanceColor&&($=y.instanceColor));let j={};j.attribute=$,$&&$.data&&(j.data=$.data),F[U]=j,P++}s.attributes=F,s.attributesNum=P,s.index=D}function _(){let y=s.newAttributes;for(let C=0,L=y.length;C<L;C++)y[C]=0}function m(y){d(y,0)}function d(y,C){let L=s.newAttributes,D=s.enabledAttributes,F=s.attributeDivisors;L[y]=1,D[y]===0&&(i.enableVertexAttribArray(y),D[y]=1),F[y]!==C&&(i.vertexAttribDivisor(y,C),F[y]=C)}function v(){let y=s.newAttributes,C=s.enabledAttributes;for(let L=0,D=C.length;L<D;L++)C[L]!==y[L]&&(i.disableVertexAttribArray(L),C[L]=0)}function M(y,C,L,D,F,B,P){P===!0?i.vertexAttribIPointer(y,C,L,F,B):i.vertexAttribPointer(y,C,L,D,F,B)}function S(y,C,L,D){_();let F=D.attributes,B=L.getAttributes(),P=C.defaultAttributeValues;for(let O in B){let U=B[O];if(U.location>=0){let W=F[O];if(W===void 0&&(O==="instanceMatrix"&&y.instanceMatrix&&(W=y.instanceMatrix),O==="instanceColor"&&y.instanceColor&&(W=y.instanceColor)),W!==void 0){let $=W.normalized,j=W.itemSize,re=e.get(W);if(re===void 0)continue;let _e=re.buffer,Z=re.type,G=re.bytesPerElement,te=Z===i.INT||Z===i.UNSIGNED_INT||W.gpuType===fa;if(W.isInterleavedBufferAttribute){let ee=W.data,xe=ee.stride,Ae=W.offset;if(ee.isInstancedInterleavedBuffer){for(let Le=0;Le<U.locationSize;Le++)d(U.location+Le,ee.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Le=0;Le<U.locationSize;Le++)m(U.location+Le);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let Le=0;Le<U.locationSize;Le++)M(U.location+Le,j/U.locationSize,Z,$,xe*G,(Ae+j/U.locationSize*Le)*G,te)}else{if(W.isInstancedBufferAttribute){for(let ee=0;ee<U.locationSize;ee++)d(U.location+ee,W.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ee=0;ee<U.locationSize;ee++)m(U.location+ee);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let ee=0;ee<U.locationSize;ee++)M(U.location+ee,j/U.locationSize,Z,$,j*G,j/U.locationSize*ee*G,te)}}else if(P!==void 0){let $=P[O];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(U.location,$);break;case 3:i.vertexAttrib3fv(U.location,$);break;case 4:i.vertexAttrib4fv(U.location,$);break;default:i.vertexAttrib1fv(U.location,$)}}}}v()}function R(){A();for(let y in n){let C=n[y];for(let L in C){let D=C[L];for(let F in D)u(D[F].object),delete D[F];delete C[L]}delete n[y]}}function b(y){if(n[y.id]===void 0)return;let C=n[y.id];for(let L in C){let D=C[L];for(let F in D)u(D[F].object),delete D[F];delete C[L]}delete n[y.id]}function w(y){for(let C in n){let L=n[C];if(L[y.id]===void 0)continue;let D=L[y.id];for(let F in D)u(D[F].object),delete D[F];delete L[y.id]}}function A(){x(),o=!0,s!==r&&(s=r,l(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:x,dispose:R,releaseStatesOfGeometry:b,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function vp(i,e,t){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,f){f!==0&&(i.drawArraysInstanced(n,l,u,f),t.update(u,n,f))}function a(l,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];t.update(p,n,1)}function c(l,u,f,h){if(f===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*h[_];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Mp(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==Gt&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let A=w===ti&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==pn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==hn&&!A)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:S,vertexTextures:R,maxSamples:b}}function bp(i){let e=this,t=null,n=0,r=!1,s=!1,o=new yt,a=new ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let p=f.length!==0||h||n!==0||r;return r=h,n=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){let g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,d=i.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{let v=s?0:n,M=v*4,S=d.clippingState||null;c.value=S,S=u(g,h,M,p);for(let R=0;R!==M;++R)S[R]=t[R];d.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,p,g){let _=f!==null?f.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let d=p+_*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let M=0,S=p;M!==_;++M,S+=4)o.copy(f[M]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Sp(i){let e=new WeakMap;function t(o,a){return a===ro?o.mapping=Ai:a===so&&(o.mapping=Ci),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ro||a===so)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new ko(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var Qr=class extends Kr{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Mi=4,vl=[.125,.215,.35,.446,.526,.582],qn=20,Hs=new Qr,Ml=new we,Vs=null,Gs=0,Ws=0,Xs=!1,Gn=(1+Math.sqrt(5))/2,_i=1/Gn,bl=[new N(-Gn,_i,0),new N(Gn,_i,0),new N(-_i,0,Gn),new N(_i,0,Gn),new N(0,Gn,-_i),new N(0,Gn,_i),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],Li=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Vs=this._renderer.getRenderTarget(),Gs=this._renderer.getActiveCubeFace(),Ws=this._renderer.getActiveMipmapLevel(),Xs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=El(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vs,Gs,Ws),this._renderer.xr.enabled=Xs,e.scissorTest=!1,Fr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ai||e.mapping===Ci?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vs=this._renderer.getRenderTarget(),Gs=this._renderer.getActiveCubeFace(),Ws=this._renderer.getActiveMipmapLevel(),Xs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:ti,format:Gt,colorSpace:Ni,depthBuffer:!1},r=Sl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sl(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ep(s)),this._blurMaterial=wp(s,e,t)}return r}_compileMaterial(e){let t=new Ve(this._lodPlanes[0],e);this._renderer.compile(t,Hs)}_sceneToCubeUV(e,t,n,r){let a=new mt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Ml),u.toneMapping=Rn,u.autoClear=!1;let p=new Nt({name:"PMREM.Background",side:St,depthWrite:!1,depthTest:!1}),g=new Ve(new gn,p),_=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Ml),_=!0);for(let d=0;d<6;d++){let v=d%3;v===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):v===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));let M=this._cubeSize;Fr(r,v*M,d>2?M:0,M,M),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Ai||e.mapping===Ci;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=wl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=El());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ve(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;Fr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Hs)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=bl[(r-s-1)%bl.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,f=new Ve(this._lodPlanes[r],l),h=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*qn-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):qn;m>qn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qn}`);let d=[],v=0;for(let w=0;w<qn;++w){let A=w/_,x=Math.exp(-A*A/2);d.push(x),w===0?v+=x:w<m&&(v+=2*x)}for(let w=0;w<d.length;w++)d[w]=d[w]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-n;let S=this._sizeLods[r],R=3*S*(r>M-Mi?r-M+Mi:0),b=4*(this._cubeSize-S);Fr(t,R,b,3*S,2*S),c.setRenderTarget(t),c.render(f,Hs)}};function Ep(i){let e=[],t=[],n=[],r=i,s=i-Mi+1+vl.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>i-Mi?c=vl[o-i+Mi-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,_=3,m=2,d=1,v=new Float32Array(_*g*p),M=new Float32Array(m*g*p),S=new Float32Array(d*g*p);for(let b=0;b<p;b++){let w=b%3*2/3-1,A=b>2?0:-1,x=[w,A,0,w+2/3,A,0,w+2/3,A+1,0,w,A,0,w+2/3,A+1,0,w,A+1,0];v.set(x,_*g*b),M.set(h,m*g*b);let y=[b,b,b,b,b,b];S.set(y,d*g*b)}let R=new mn;R.setAttribute("position",new Rt(v,_)),R.setAttribute("uv",new Rt(M,m)),R.setAttribute("faceIndex",new Rt(S,d)),e.push(R),r>Mi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Sl(i,e,t){let n=new Xt(i,e,t);return n.texture.mapping=as,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function wp(i,e,t){let n=new Float32Array(qn),r=new N(0,1,0);return new Ot({name:"SphericalGaussianBlur",defines:{n:qn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function El(){return new Ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function wl(){return new Ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Sa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Tp(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===ro||c===so,u=c===Ai||c===Ci;if(l||u){let f=e.get(a),h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Li(i)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{let p=a.image;return l&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new Li(i)),f=l?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ap(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Qi("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Cp(i,e,t,n){let r={},s=new WeakMap;function o(f){let h=f.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);for(let g in h.morphAttributes){let _=h.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}h.removeEventListener("dispose",o),delete r[h.id];let p=s.get(h);p&&(e.remove(p),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(f){let h=f.attributes;for(let g in h)e.update(h[g],i.ARRAY_BUFFER);let p=f.morphAttributes;for(let g in p){let _=p[g];for(let m=0,d=_.length;m<d;m++)e.update(_[m],i.ARRAY_BUFFER)}}function l(f){let h=[],p=f.index,g=f.attributes.position,_=0;if(p!==null){let v=p.array;_=p.version;for(let M=0,S=v.length;M<S;M+=3){let R=v[M+0],b=v[M+1],w=v[M+2];h.push(R,b,b,w,w,R)}}else if(g!==void 0){let v=g.array;_=g.version;for(let M=0,S=v.length/3-1;M<S;M+=3){let R=M+0,b=M+1,w=M+2;h.push(R,b,b,w,w,R)}}else return;let m=new(uc(h)?$r:Jr)(h,1);m.version=_;let d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){let h=s.get(f);if(h){let p=f.index;p!==null&&h.version<p.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function Rp(i,e,t){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,p){i.drawElements(n,p,s,h*o),t.update(p,n,1)}function l(h,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,h*o,g),t.update(p,n,g))}function u(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,h,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,n,1)}function f(h,p,g,_){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)l(h[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,h,0,_,0,g);let d=0;for(let v=0;v<g;v++)d+=p[v]*_[v];t.update(d,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Pp(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Ip(i,e,t){let n=new WeakMap,r=new qe;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==f){let x=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",x)};h!==void 0&&h.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],M=0;p===!0&&(M=1),g===!0&&(M=2),_===!0&&(M=3);let S=a.attributes.position.count*M,R=1;S>e.maxTextureSize&&(R=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let b=new Float32Array(S*R*4*f),w=new Yr(b,S,R,f);w.type=hn,w.needsUpdate=!0;let A=M*4;for(let y=0;y<f;y++){let C=m[y],L=d[y],D=v[y],F=S*R*4*y;for(let B=0;B<C.count;B++){let P=B*A;p===!0&&(r.fromBufferAttribute(C,B),b[F+P+0]=r.x,b[F+P+1]=r.y,b[F+P+2]=r.z,b[F+P+3]=0),g===!0&&(r.fromBufferAttribute(L,B),b[F+P+4]=r.x,b[F+P+5]=r.y,b[F+P+6]=r.z,b[F+P+7]=0),_===!0&&(r.fromBufferAttribute(D,B),b[F+P+8]=r.x,b[F+P+9]=r.y,b[F+P+10]=r.z,b[F+P+11]=D.itemSize===4?r.w:1)}}h={count:f,texture:w,size:new Fe(S,R)},n.set(a,h),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let _=0;_<l.length;_++)p+=l[_];let g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function Lp(i,e,t,n){let r=new WeakMap;function s(c){let l=n.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return f}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var es=class extends Dt{constructor(e,t,n,r,s,o,a,c,l,u=Si){if(u!==Si&&u!==Pi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Si&&(n=Jn),n===void 0&&u===Pi&&(n=Ri),super(null,r,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Wt,this.minFilter=c!==void 0?c:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},pc=new Dt,Tl=new es(1,1),mc=new Yr,gc=new Bo,yc=new jr,Al=[],Cl=[],Rl=new Float32Array(16),Pl=new Float32Array(9),Il=new Float32Array(4);function Bi(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Al[r];if(s===void 0&&(s=new Float32Array(r),Al[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ht(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function cs(i,e){let t=Cl[e];t===void 0&&(t=new Int32Array(e),Cl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Dp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Up(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;i.uniform2fv(this.addr,e),ht(t,e)}}function Fp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ut(t,e))return;i.uniform3fv(this.addr,e),ht(t,e)}}function Np(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;i.uniform4fv(this.addr,e),ht(t,e)}}function Op(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ht(t,e)}else{if(ut(t,n))return;Il.set(n),i.uniformMatrix2fv(this.addr,!1,Il),ht(t,n)}}function Bp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ht(t,e)}else{if(ut(t,n))return;Pl.set(n),i.uniformMatrix3fv(this.addr,!1,Pl),ht(t,n)}}function zp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ht(t,e)}else{if(ut(t,n))return;Rl.set(n),i.uniformMatrix4fv(this.addr,!1,Rl),ht(t,n)}}function kp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Hp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;i.uniform2iv(this.addr,e),ht(t,e)}}function Vp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;i.uniform3iv(this.addr,e),ht(t,e)}}function Gp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;i.uniform4iv(this.addr,e),ht(t,e)}}function Wp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Xp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;i.uniform2uiv(this.addr,e),ht(t,e)}}function qp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;i.uniform3uiv(this.addr,e),ht(t,e)}}function Yp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;i.uniform4uiv(this.addr,e),ht(t,e)}}function Zp(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Tl.compareFunction=cc,s=Tl):s=pc,t.setTexture2D(e||s,r)}function Jp(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||gc,r)}function $p(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||yc,r)}function Kp(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||mc,r)}function jp(i){switch(i){case 5126:return Dp;case 35664:return Up;case 35665:return Fp;case 35666:return Np;case 35674:return Op;case 35675:return Bp;case 35676:return zp;case 5124:case 35670:return kp;case 35667:case 35671:return Hp;case 35668:case 35672:return Vp;case 35669:case 35673:return Gp;case 5125:return Wp;case 36294:return Xp;case 36295:return qp;case 36296:return Yp;case 35678:case 36198:case 36298:case 36306:case 35682:return Zp;case 35679:case 36299:case 36307:return Jp;case 35680:case 36300:case 36308:case 36293:return $p;case 36289:case 36303:case 36311:case 36292:return Kp}}function Qp(i,e){i.uniform1fv(this.addr,e)}function em(i,e){let t=Bi(e,this.size,2);i.uniform2fv(this.addr,t)}function tm(i,e){let t=Bi(e,this.size,3);i.uniform3fv(this.addr,t)}function nm(i,e){let t=Bi(e,this.size,4);i.uniform4fv(this.addr,t)}function im(i,e){let t=Bi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function rm(i,e){let t=Bi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function sm(i,e){let t=Bi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function om(i,e){i.uniform1iv(this.addr,e)}function am(i,e){i.uniform2iv(this.addr,e)}function lm(i,e){i.uniform3iv(this.addr,e)}function cm(i,e){i.uniform4iv(this.addr,e)}function um(i,e){i.uniform1uiv(this.addr,e)}function hm(i,e){i.uniform2uiv(this.addr,e)}function dm(i,e){i.uniform3uiv(this.addr,e)}function fm(i,e){i.uniform4uiv(this.addr,e)}function pm(i,e,t){let n=this.cache,r=e.length,s=cs(t,r);ut(n,s)||(i.uniform1iv(this.addr,s),ht(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||pc,s[o])}function mm(i,e,t){let n=this.cache,r=e.length,s=cs(t,r);ut(n,s)||(i.uniform1iv(this.addr,s),ht(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||gc,s[o])}function gm(i,e,t){let n=this.cache,r=e.length,s=cs(t,r);ut(n,s)||(i.uniform1iv(this.addr,s),ht(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||yc,s[o])}function ym(i,e,t){let n=this.cache,r=e.length,s=cs(t,r);ut(n,s)||(i.uniform1iv(this.addr,s),ht(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||mc,s[o])}function xm(i){switch(i){case 5126:return Qp;case 35664:return em;case 35665:return tm;case 35666:return nm;case 35674:return im;case 35675:return rm;case 35676:return sm;case 5124:case 35670:return om;case 35667:case 35671:return am;case 35668:case 35672:return lm;case 35669:case 35673:return cm;case 5125:return um;case 36294:return hm;case 36295:return dm;case 36296:return fm;case 35678:case 36198:case 36298:case 36306:case 35682:return pm;case 35679:case 36299:case 36307:return mm;case 35680:case 36300:case 36308:case 36293:return gm;case 36289:case 36303:case 36311:case 36292:return ym}}var Ho=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=jp(t.type)}},Vo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xm(t.type)}},Go=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},qs=/(\w+)(\])?(\[|\.)?/g;function Ll(i,e){i.seq.push(e),i.map[e.id]=e}function _m(i,e,t){let n=i.name,r=n.length;for(qs.lastIndex=0;;){let s=qs.exec(n),o=qs.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Ll(t,l===void 0?new Ho(a,i,e):new Vo(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Go(a),Ll(t,f)),t=f}}}var wi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);_m(s,o,this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function Dl(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var vm=37297,Mm=0;function bm(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Ul=new ze;function Sm(i){Xe._getMatrix(Ul,Xe.workingColorSpace,i);let e=`mat3( ${Ul.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(i)){case ls:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Fl(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+bm(i.getShaderSource(e),o)}else return r}function Em(i,e){let t=Sm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function wm(i,e){let t;switch(e){case Nu:t="Linear";break;case Ou:t="Reinhard";break;case Bu:t="Cineon";break;case zu:t="ACESFilmic";break;case Hu:t="AgX";break;case da:t="Neutral";break;case ku:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Nr=new N;function Tm(){Xe.getLuminanceCoefficients(Nr);let i=Nr.x.toFixed(4),e=Nr.y.toFixed(4),t=Nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Am(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(er).join(`
`)}function Cm(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Rm(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function er(i){return i!==""}function Nl(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ol(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Pm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wo(i){return i.replace(Pm,Lm)}var Im=new Map;function Lm(i,e){let t=Ne[e];if(t===void 0){let n=Im.get(e);if(n!==void 0)t=Ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Wo(t)}var Dm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bl(i){return i.replace(Dm,Um)}function Um(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function zl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Fm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Jl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===mu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===cn&&(e="SHADOWMAP_TYPE_VSM"),e}function Nm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ai:case Ci:e="ENVMAP_TYPE_CUBE";break;case as:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Om(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ci&&(e="ENVMAP_MODE_REFRACTION"),e}function Bm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case $l:e="ENVMAP_BLENDING_MULTIPLY";break;case Uu:e="ENVMAP_BLENDING_MIX";break;case Fu:e="ENVMAP_BLENDING_ADD";break}return e}function zm(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function km(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Fm(t),l=Nm(t),u=Om(t),f=Bm(t),h=zm(t),p=Am(t),g=Cm(s),_=r.createProgram(),m,d,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(er).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(er).join(`
`),d.length>0&&(d+=`
`)):(m=[zl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),d=[zl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rn?"#define TONE_MAPPING":"",t.toneMapping!==Rn?Ne.tonemapping_pars_fragment:"",t.toneMapping!==Rn?wm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,Em("linearToOutputTexel",t.outputColorSpace),Tm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(er).join(`
`)),o=Wo(o),o=Nl(o,t),o=Ol(o,t),a=Wo(a),a=Nl(a,t),a=Ol(a,t),o=Bl(o),a=Bl(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===ja?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ja?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let M=v+m+o,S=v+d+a,R=Dl(r,r.VERTEX_SHADER,M),b=Dl(r,r.FRAGMENT_SHADER,S);r.attachShader(_,R),r.attachShader(_,b),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(C){if(i.debug.checkShaderErrors){let L=r.getProgramInfoLog(_).trim(),D=r.getShaderInfoLog(R).trim(),F=r.getShaderInfoLog(b).trim(),B=!0,P=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,R,b);else{let O=Fl(r,R,"vertex"),U=Fl(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+O+`
`+U)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(D===""||F==="")&&(P=!1);P&&(C.diagnostics={runnable:B,programLog:L,vertexShader:{log:D,prefix:m},fragmentShader:{log:F,prefix:d}})}r.deleteShader(R),r.deleteShader(b),A=new wi(r,_),x=Rm(r,_)}let A;this.getUniforms=function(){return A===void 0&&w(this),A};let x;this.getAttributes=function(){return x===void 0&&w(this),x};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,vm)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Mm++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=b,this}var Hm=0,Xo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new qo(e),t.set(e,n)),n}},qo=class{constructor(e){this.id=Hm++,this.code=e,this.usedTimes=0}};function Vm(i,e,t,n,r,s,o){let a=new or,c=new Xo,l=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures,p=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,y,C,L,D){let F=L.fog,B=D.geometry,P=x.isMeshStandardMaterial?L.environment:null,O=(x.isMeshStandardMaterial?t:e).get(x.envMap||P),U=O&&O.mapping===as?O.image.height:null,W=g[x.type];x.precision!==null&&(p=r.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));let $=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,j=$!==void 0?$.length:0,re=0;B.morphAttributes.position!==void 0&&(re=1),B.morphAttributes.normal!==void 0&&(re=2),B.morphAttributes.color!==void 0&&(re=3);let _e,Z,G,te;if(W){let Qe=Jt[W];_e=Qe.vertexShader,Z=Qe.fragmentShader}else _e=x.vertexShader,Z=x.fragmentShader,c.update(x),G=c.getVertexShaderID(x),te=c.getFragmentShaderID(x);let ee=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),Ae=D.isInstancedMesh===!0,Le=D.isBatchedMesh===!0,Ce=!!x.map,le=!!x.matcap,je=!!O,z=!!x.aoMap,lt=!!x.lightMap,Re=!!x.bumpMap,Pe=!!x.normalMap,ye=!!x.displacementMap,He=!!x.emissiveMap,Me=!!x.metalnessMap,I=!!x.roughnessMap,E=x.anisotropy>0,X=x.clearcoat>0,Q=x.dispersion>0,ie=x.iridescence>0,K=x.sheen>0,ve=x.transmission>0,ce=E&&!!x.anisotropyMap,he=X&&!!x.clearcoatMap,We=X&&!!x.clearcoatNormalMap,se=X&&!!x.clearcoatRoughnessMap,me=ie&&!!x.iridescenceMap,Ie=ie&&!!x.iridescenceThicknessMap,De=K&&!!x.sheenColorMap,ge=K&&!!x.sheenRoughnessMap,Ge=!!x.specularMap,ke=!!x.specularColorMap,tt=!!x.specularIntensityMap,k=ve&&!!x.transmissionMap,ue=ve&&!!x.thicknessMap,J=!!x.gradientMap,ne=!!x.alphaMap,pe=x.alphaTest>0,de=!!x.alphaHash,Oe=!!x.extensions,at=Rn;x.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(at=i.toneMapping);let _t={shaderID:W,shaderType:x.type,shaderName:x.name,vertexShader:_e,fragmentShader:Z,defines:x.defines,customVertexShaderID:G,customFragmentShaderID:te,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:Le,batchingColor:Le&&D._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&D.instanceColor!==null,instancingMorph:Ae&&D.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Ni,alphaToCoverage:!!x.alphaToCoverage,map:Ce,matcap:le,envMap:je,envMapMode:je&&O.mapping,envMapCubeUVHeight:U,aoMap:z,lightMap:lt,bumpMap:Re,normalMap:Pe,displacementMap:h&&ye,emissiveMap:He,normalMapObjectSpace:Pe&&x.normalMapType===Xu,normalMapTangentSpace:Pe&&x.normalMapType===lc,metalnessMap:Me,roughnessMap:I,anisotropy:E,anisotropyMap:ce,clearcoat:X,clearcoatMap:he,clearcoatNormalMap:We,clearcoatRoughnessMap:se,dispersion:Q,iridescence:ie,iridescenceMap:me,iridescenceThicknessMap:Ie,sheen:K,sheenColorMap:De,sheenRoughnessMap:ge,specularMap:Ge,specularColorMap:ke,specularIntensityMap:tt,transmission:ve,transmissionMap:k,thicknessMap:ue,gradientMap:J,opaque:x.transparent===!1&&x.blending===bi&&x.alphaToCoverage===!1,alphaMap:ne,alphaTest:pe,alphaHash:de,combine:x.combine,mapUv:Ce&&_(x.map.channel),aoMapUv:z&&_(x.aoMap.channel),lightMapUv:lt&&_(x.lightMap.channel),bumpMapUv:Re&&_(x.bumpMap.channel),normalMapUv:Pe&&_(x.normalMap.channel),displacementMapUv:ye&&_(x.displacementMap.channel),emissiveMapUv:He&&_(x.emissiveMap.channel),metalnessMapUv:Me&&_(x.metalnessMap.channel),roughnessMapUv:I&&_(x.roughnessMap.channel),anisotropyMapUv:ce&&_(x.anisotropyMap.channel),clearcoatMapUv:he&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:We&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:De&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:ge&&_(x.sheenRoughnessMap.channel),specularMapUv:Ge&&_(x.specularMap.channel),specularColorMapUv:ke&&_(x.specularColorMap.channel),specularIntensityMapUv:tt&&_(x.specularIntensityMap.channel),transmissionMapUv:k&&_(x.transmissionMap.channel),thicknessMapUv:ue&&_(x.thicknessMap.channel),alphaMapUv:ne&&_(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Pe||E),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!B.attributes.uv&&(Ce||ne),fog:!!F,useFog:x.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:xe,skinning:D.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:re,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:at,decodeVideoTexture:Ce&&x.map.isVideoTexture===!0&&Xe.getTransfer(x.map.colorSpace)===et,decodeVideoTextureEmissive:He&&x.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(x.emissiveMap.colorSpace)===et,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===un,flipSided:x.side===St,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Oe&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&x.extensions.multiDraw===!0||Le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return _t.vertexUv1s=l.has(1),_t.vertexUv2s=l.has(2),_t.vertexUv3s=l.has(3),l.clear(),_t}function d(x){let y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)y.push(C),y.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(v(y,x),M(y,x),y.push(i.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function v(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function M(x,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),x.push(a.mask)}function S(x){let y=g[x.type],C;if(y){let L=Jt[y];C=ba.clone(L.uniforms)}else C=x.uniforms;return C}function R(x,y){let C;for(let L=0,D=u.length;L<D;L++){let F=u[L];if(F.cacheKey===y){C=F,++C.usedTimes;break}}return C===void 0&&(C=new km(i,y,x,s),u.push(C)),C}function b(x){if(--x.usedTimes===0){let y=u.indexOf(x);u[y]=u[u.length-1],u.pop(),x.destroy()}}function w(x){c.remove(x)}function A(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:S,acquireProgram:R,releaseProgram:b,releaseShaderCache:w,programs:u,dispose:A}}function Gm(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Wm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function kl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Hl(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f,h,p,g,_,m){let d=i[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},i[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=_,d.group=m),e++,d}function a(f,h,p,g,_,m){let d=o(f,h,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?r.push(d):t.push(d)}function c(f,h,p,g,_,m){let d=o(f,h,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function l(f,h){t.length>1&&t.sort(f||Wm),n.length>1&&n.sort(h||kl),r.length>1&&r.sort(h||kl)}function u(){for(let f=e,h=i.length;f<h;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function Xm(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new Hl,i.set(n,[o])):r>=s.length?(o=new Hl,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function qm(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new we};break;case"SpotLight":t={position:new N,direction:new N,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function Ym(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Zm=0;function Jm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function $m(i){let e=new qm,t=Ym(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);let r=new N,s=new it,o=new it;function a(l){let u=0,f=0,h=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,v=0,M=0,S=0,R=0,b=0,w=0;l.sort(Jm);for(let x=0,y=l.length;x<y;x++){let C=l[x],L=C.color,D=C.intensity,F=C.distance,B=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=L.r*D,f+=L.g*D,h+=L.b*D;else if(C.isLightProbe){for(let P=0;P<9;P++)n.probe[P].addScaledVector(C.sh.coefficients[P],D);w++}else if(C.isDirectionalLight){let P=e.get(C);if(P.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let O=C.shadow,U=t.get(C);U.shadowIntensity=O.intensity,U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize=O.mapSize,n.directionalShadow[p]=U,n.directionalShadowMap[p]=B,n.directionalShadowMatrix[p]=C.shadow.matrix,v++}n.directional[p]=P,p++}else if(C.isSpotLight){let P=e.get(C);P.position.setFromMatrixPosition(C.matrixWorld),P.color.copy(L).multiplyScalar(D),P.distance=F,P.coneCos=Math.cos(C.angle),P.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),P.decay=C.decay,n.spot[_]=P;let O=C.shadow;if(C.map&&(n.spotLightMap[R]=C.map,R++,O.updateMatrices(C),C.castShadow&&b++),n.spotLightMatrix[_]=O.matrix,C.castShadow){let U=t.get(C);U.shadowIntensity=O.intensity,U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize=O.mapSize,n.spotShadow[_]=U,n.spotShadowMap[_]=B,S++}_++}else if(C.isRectAreaLight){let P=e.get(C);P.color.copy(L).multiplyScalar(D),P.halfWidth.set(C.width*.5,0,0),P.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=P,m++}else if(C.isPointLight){let P=e.get(C);if(P.color.copy(C.color).multiplyScalar(C.intensity),P.distance=C.distance,P.decay=C.decay,C.castShadow){let O=C.shadow,U=t.get(C);U.shadowIntensity=O.intensity,U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize=O.mapSize,U.shadowCameraNear=O.camera.near,U.shadowCameraFar=O.camera.far,n.pointShadow[g]=U,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=C.shadow.matrix,M++}n.point[g]=P,g++}else if(C.isHemisphereLight){let P=e.get(C);P.skyColor.copy(C.color).multiplyScalar(D),P.groundColor.copy(C.groundColor).multiplyScalar(D),n.hemi[d]=P,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let A=n.hash;(A.directionalLength!==p||A.pointLength!==g||A.spotLength!==_||A.rectAreaLength!==m||A.hemiLength!==d||A.numDirectionalShadows!==v||A.numPointShadows!==M||A.numSpotShadows!==S||A.numSpotMaps!==R||A.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=S+R-b,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=w,A.directionalLength=p,A.pointLength=g,A.spotLength=_,A.rectAreaLength=m,A.hemiLength=d,A.numDirectionalShadows=v,A.numPointShadows=M,A.numSpotShadows=S,A.numSpotMaps=R,A.numLightProbes=w,n.version=Zm++)}function c(l,u){let f=0,h=0,p=0,g=0,_=0,m=u.matrixWorldInverse;for(let d=0,v=l.length;d<v;d++){let M=l[d];if(M.isDirectionalLight){let S=n.directional[f];S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(M.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(M.isRectAreaLight){let S=n.rectArea[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let S=n.point[h];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),h++}else if(M.isHemisphereLight){let S=n.hemi[_];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Vl(i){let e=new $m(i),t=[],n=[];function r(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Km(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new Vl(i),e.set(r,[a])):s>=o.length?(a=new Vl(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Yo=class extends jn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Gu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Zo=class extends jn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},jm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function eg(i,e,t){let n=new ar,r=new Fe,s=new Fe,o=new qe,a=new Yo({depthPacking:Wu}),c=new Zo,l={},u=t.maxTextureSize,f={[Pn]:St,[St]:Pn,[un]:un},h=new Ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:jm,fragmentShader:Qm}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let g=new mn;g.setAttribute("position",new Rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ve(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jl;let d=this.type;this.render=function(b,w,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let x=i.getRenderTarget(),y=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Cn),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let D=d!==cn&&this.type===cn,F=d===cn&&this.type!==cn;for(let B=0,P=b.length;B<P;B++){let O=b[B],U=O.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);let W=U.getFrameExtents();if(r.multiply(W),s.copy(U.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/W.x),r.x=s.x*W.x,U.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/W.y),r.y=s.y*W.y,U.mapSize.y=s.y)),U.map===null||D===!0||F===!0){let j=this.type!==cn?{minFilter:Wt,magFilter:Wt}:{};U.map!==null&&U.map.dispose(),U.map=new Xt(r.x,r.y,j),U.map.texture.name=O.name+".shadowMap",U.camera.updateProjectionMatrix()}i.setRenderTarget(U.map),i.clear();let $=U.getViewportCount();for(let j=0;j<$;j++){let re=U.getViewport(j);o.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),L.viewport(o),U.updateMatrices(O,j),n=U.getFrustum(),S(w,A,U.camera,O,this.type)}U.isPointLightShadow!==!0&&this.type===cn&&v(U,A),U.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(x,y,C)};function v(b,w){let A=e.update(_);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Xt(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(w,null,A,h,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(w,null,A,p,_,null)}function M(b,w,A,x){let y=null,C=A.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)y=C;else if(y=A.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let L=y.uuid,D=w.uuid,F=l[L];F===void 0&&(F={},l[L]=F);let B=F[D];B===void 0&&(B=y.clone(),F[D]=B,w.addEventListener("dispose",R)),y=B}if(y.visible=w.visible,y.wireframe=w.wireframe,x===cn?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:f[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,A.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let L=i.properties.get(y);L.light=A}return y}function S(b,w,A,x,y){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===cn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,b.matrixWorld);let D=e.update(b),F=b.material;if(Array.isArray(F)){let B=D.groups;for(let P=0,O=B.length;P<O;P++){let U=B[P],W=F[U.materialIndex];if(W&&W.visible){let $=M(b,W,x,y);b.onBeforeShadow(i,b,w,A,D,$,U),i.renderBufferDirect(A,null,D,$,b,U),b.onAfterShadow(i,b,w,A,D,$,U)}}}else if(F.visible){let B=M(b,F,x,y);b.onBeforeShadow(i,b,w,A,D,B,null),i.renderBufferDirect(A,null,D,B,b,null),b.onAfterShadow(i,b,w,A,D,B,null)}}let L=b.children;for(let D=0,F=L.length;D<F;D++)S(L[D],w,A,x,y)}function R(b){b.target.removeEventListener("dispose",R);for(let A in l){let x=l[A],y=b.target.uuid;y in x&&(x[y].dispose(),delete x[y])}}}var tg={[Ks]:js,[Qs]:no,[eo]:io,[Ti]:to,[js]:Ks,[no]:Qs,[io]:eo,[to]:Ti};function ng(i,e){function t(){let k=!1,ue=new qe,J=null,ne=new qe(0,0,0,0);return{setMask:function(pe){J!==pe&&!k&&(i.colorMask(pe,pe,pe,pe),J=pe)},setLocked:function(pe){k=pe},setClear:function(pe,de,Oe,at,_t){_t===!0&&(pe*=at,de*=at,Oe*=at),ue.set(pe,de,Oe,at),ne.equals(ue)===!1&&(i.clearColor(pe,de,Oe,at),ne.copy(ue))},reset:function(){k=!1,J=null,ne.set(-1,0,0,0)}}}function n(){let k=!1,ue=!1,J=null,ne=null,pe=null;return{setReversed:function(de){if(ue!==de){let Oe=e.get("EXT_clip_control");ue?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT);let at=pe;pe=null,this.setClear(at)}ue=de},getReversed:function(){return ue},setTest:function(de){de?ee(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(de){J!==de&&!k&&(i.depthMask(de),J=de)},setFunc:function(de){if(ue&&(de=tg[de]),ne!==de){switch(de){case Ks:i.depthFunc(i.NEVER);break;case js:i.depthFunc(i.ALWAYS);break;case Qs:i.depthFunc(i.LESS);break;case Ti:i.depthFunc(i.LEQUAL);break;case eo:i.depthFunc(i.EQUAL);break;case to:i.depthFunc(i.GEQUAL);break;case no:i.depthFunc(i.GREATER);break;case io:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ne=de}},setLocked:function(de){k=de},setClear:function(de){pe!==de&&(ue&&(de=1-de),i.clearDepth(de),pe=de)},reset:function(){k=!1,J=null,ne=null,pe=null,ue=!1}}}function r(){let k=!1,ue=null,J=null,ne=null,pe=null,de=null,Oe=null,at=null,_t=null;return{setTest:function(Qe){k||(Qe?ee(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(Qe){ue!==Qe&&!k&&(i.stencilMask(Qe),ue=Qe)},setFunc:function(Qe,Bt,tn){(J!==Qe||ne!==Bt||pe!==tn)&&(i.stencilFunc(Qe,Bt,tn),J=Qe,ne=Bt,pe=tn)},setOp:function(Qe,Bt,tn){(de!==Qe||Oe!==Bt||at!==tn)&&(i.stencilOp(Qe,Bt,tn),de=Qe,Oe=Bt,at=tn)},setLocked:function(Qe){k=Qe},setClear:function(Qe){_t!==Qe&&(i.clearStencil(Qe),_t=Qe)},reset:function(){k=!1,ue=null,J=null,ne=null,pe=null,de=null,Oe=null,at=null,_t=null}}}let s=new t,o=new n,a=new r,c=new WeakMap,l=new WeakMap,u={},f={},h=new WeakMap,p=[],g=null,_=!1,m=null,d=null,v=null,M=null,S=null,R=null,b=null,w=new we(0,0,0),A=0,x=!1,y=null,C=null,L=null,D=null,F=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),P=!1,O=0,U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(U)[1]),P=O>=1):U.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),P=O>=2);let W=null,$={},j=i.getParameter(i.SCISSOR_BOX),re=i.getParameter(i.VIEWPORT),_e=new qe().fromArray(j),Z=new qe().fromArray(re);function G(k,ue,J,ne){let pe=new Uint8Array(4),de=i.createTexture();i.bindTexture(k,de),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Oe=0;Oe<J;Oe++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(ue,0,i.RGBA,1,1,ne,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(ue+Oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return de}let te={};te[i.TEXTURE_2D]=G(i.TEXTURE_2D,i.TEXTURE_2D,1),te[i.TEXTURE_CUBE_MAP]=G(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[i.TEXTURE_2D_ARRAY]=G(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),te[i.TEXTURE_3D]=G(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(i.DEPTH_TEST),o.setFunc(Ti),Re(!1),Pe(Ga),ee(i.CULL_FACE),z(Cn);function ee(k){u[k]!==!0&&(i.enable(k),u[k]=!0)}function xe(k){u[k]!==!1&&(i.disable(k),u[k]=!1)}function Ae(k,ue){return f[k]!==ue?(i.bindFramebuffer(k,ue),f[k]=ue,k===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ue),k===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ue),!0):!1}function Le(k,ue){let J=p,ne=!1;if(k){J=h.get(ue),J===void 0&&(J=[],h.set(ue,J));let pe=k.textures;if(J.length!==pe.length||J[0]!==i.COLOR_ATTACHMENT0){for(let de=0,Oe=pe.length;de<Oe;de++)J[de]=i.COLOR_ATTACHMENT0+de;J.length=pe.length,ne=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,ne=!0);ne&&i.drawBuffers(J)}function Ce(k){return g!==k?(i.useProgram(k),g=k,!0):!1}let le={[Wn]:i.FUNC_ADD,[yu]:i.FUNC_SUBTRACT,[xu]:i.FUNC_REVERSE_SUBTRACT};le[_u]=i.MIN,le[vu]=i.MAX;let je={[Mu]:i.ZERO,[bu]:i.ONE,[Su]:i.SRC_COLOR,[Js]:i.SRC_ALPHA,[Ru]:i.SRC_ALPHA_SATURATE,[Au]:i.DST_COLOR,[wu]:i.DST_ALPHA,[Eu]:i.ONE_MINUS_SRC_COLOR,[$s]:i.ONE_MINUS_SRC_ALPHA,[Cu]:i.ONE_MINUS_DST_COLOR,[Tu]:i.ONE_MINUS_DST_ALPHA,[Pu]:i.CONSTANT_COLOR,[Iu]:i.ONE_MINUS_CONSTANT_COLOR,[Lu]:i.CONSTANT_ALPHA,[Du]:i.ONE_MINUS_CONSTANT_ALPHA};function z(k,ue,J,ne,pe,de,Oe,at,_t,Qe){if(k===Cn){_===!0&&(xe(i.BLEND),_=!1);return}if(_===!1&&(ee(i.BLEND),_=!0),k!==gu){if(k!==m||Qe!==x){if((d!==Wn||S!==Wn)&&(i.blendEquation(i.FUNC_ADD),d=Wn,S=Wn),Qe)switch(k){case bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wa:i.blendFunc(i.ONE,i.ONE);break;case Xa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qa:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Xa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qa:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}v=null,M=null,R=null,b=null,w.set(0,0,0),A=0,m=k,x=Qe}return}pe=pe||ue,de=de||J,Oe=Oe||ne,(ue!==d||pe!==S)&&(i.blendEquationSeparate(le[ue],le[pe]),d=ue,S=pe),(J!==v||ne!==M||de!==R||Oe!==b)&&(i.blendFuncSeparate(je[J],je[ne],je[de],je[Oe]),v=J,M=ne,R=de,b=Oe),(at.equals(w)===!1||_t!==A)&&(i.blendColor(at.r,at.g,at.b,_t),w.copy(at),A=_t),m=k,x=!1}function lt(k,ue){k.side===un?xe(i.CULL_FACE):ee(i.CULL_FACE);let J=k.side===St;ue&&(J=!J),Re(J),k.blending===bi&&k.transparent===!1?z(Cn):z(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),s.setMask(k.colorWrite);let ne=k.stencilWrite;a.setTest(ne),ne&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),He(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Re(k){y!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),y=k)}function Pe(k){k!==fu?(ee(i.CULL_FACE),k!==C&&(k===Ga?i.cullFace(i.BACK):k===pu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),C=k}function ye(k){k!==L&&(P&&i.lineWidth(k),L=k)}function He(k,ue,J){k?(ee(i.POLYGON_OFFSET_FILL),(D!==ue||F!==J)&&(i.polygonOffset(ue,J),D=ue,F=J)):xe(i.POLYGON_OFFSET_FILL)}function Me(k){k?ee(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function I(k){k===void 0&&(k=i.TEXTURE0+B-1),W!==k&&(i.activeTexture(k),W=k)}function E(k,ue,J){J===void 0&&(W===null?J=i.TEXTURE0+B-1:J=W);let ne=$[J];ne===void 0&&(ne={type:void 0,texture:void 0},$[J]=ne),(ne.type!==k||ne.texture!==ue)&&(W!==J&&(i.activeTexture(J),W=J),i.bindTexture(k,ue||te[k]),ne.type=k,ne.texture=ue)}function X(){let k=$[W];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ie(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ve(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ce(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function he(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function We(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function se(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function me(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ie(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function De(k){_e.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),_e.copy(k))}function ge(k){Z.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),Z.copy(k))}function Ge(k,ue){let J=l.get(ue);J===void 0&&(J=new WeakMap,l.set(ue,J));let ne=J.get(k);ne===void 0&&(ne=i.getUniformBlockIndex(ue,k.name),J.set(k,ne))}function ke(k,ue){let ne=l.get(ue).get(k);c.get(ue)!==ne&&(i.uniformBlockBinding(ue,ne,k.__bindingPointIndex),c.set(ue,ne))}function tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},W=null,$={},f={},h=new WeakMap,p=[],g=null,_=!1,m=null,d=null,v=null,M=null,S=null,R=null,b=null,w=new we(0,0,0),A=0,x=!1,y=null,C=null,L=null,D=null,F=null,_e.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ee,disable:xe,bindFramebuffer:Ae,drawBuffers:Le,useProgram:Ce,setBlending:z,setMaterial:lt,setFlipSided:Re,setCullFace:Pe,setLineWidth:ye,setPolygonOffset:He,setScissorTest:Me,activeTexture:I,bindTexture:E,unbindTexture:X,compressedTexImage2D:Q,compressedTexImage3D:ie,texImage2D:me,texImage3D:Ie,updateUBOMapping:Ge,uniformBlockBinding:ke,texStorage2D:We,texStorage3D:se,texSubImage2D:K,texSubImage3D:ve,compressedTexSubImage2D:ce,compressedTexSubImage3D:he,scissor:De,viewport:ge,reset:tt}}function Gl(i,e,t,n){let r=ig(n);switch(t){case tc:return i*e;case ic:return i*e;case rc:return i*e*2;case sc:return i*e/r.components*r.byteLength;case ga:return i*e/r.components*r.byteLength;case oc:return i*e*2/r.components*r.byteLength;case ya:return i*e*2/r.components*r.byteLength;case nc:return i*e*3/r.components*r.byteLength;case Gt:return i*e*4/r.components*r.byteLength;case xa:return i*e*4/r.components*r.byteLength;case Br:case zr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case kr:case Hr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case co:case ho:return Math.max(i,16)*Math.max(e,8)/4;case lo:case uo:return Math.max(i,8)*Math.max(e,8)/2;case fo:case po:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case go:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case yo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case xo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case _o:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case vo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Mo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case bo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case So:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Eo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case wo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case To:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ao:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Co:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ro:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Vr:case Po:case Io:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ac:case Lo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Do:case Uo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ig(i){switch(i){case pn:case jl:return{byteLength:1,components:1};case rr:case Ql:case ti:return{byteLength:2,components:1};case pa:case ma:return{byteLength:2,components:4};case Jn:case fa:case hn:return{byteLength:4,components:1};case ec:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function rg(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Fe,u=new WeakMap,f,h=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,E){return p?new OffscreenCanvas(I,E):Xr("canvas")}function _(I,E,X){let Q=1,ie=Me(I);if((ie.width>X||ie.height>X)&&(Q=X/Math.max(ie.width,ie.height)),Q<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let K=Math.floor(Q*ie.width),ve=Math.floor(Q*ie.height);f===void 0&&(f=g(K,ve));let ce=E?g(K,ve):f;return ce.width=K,ce.height=ve,ce.getContext("2d").drawImage(I,0,0,K,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+K+"x"+ve+")."),ce}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),I;return I}function m(I){return I.generateMipmaps}function d(I){i.generateMipmap(I)}function v(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(I,E,X,Q,ie=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let K=E;if(E===i.RED&&(X===i.FLOAT&&(K=i.R32F),X===i.HALF_FLOAT&&(K=i.R16F),X===i.UNSIGNED_BYTE&&(K=i.R8)),E===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(K=i.R8UI),X===i.UNSIGNED_SHORT&&(K=i.R16UI),X===i.UNSIGNED_INT&&(K=i.R32UI),X===i.BYTE&&(K=i.R8I),X===i.SHORT&&(K=i.R16I),X===i.INT&&(K=i.R32I)),E===i.RG&&(X===i.FLOAT&&(K=i.RG32F),X===i.HALF_FLOAT&&(K=i.RG16F),X===i.UNSIGNED_BYTE&&(K=i.RG8)),E===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(K=i.RG8UI),X===i.UNSIGNED_SHORT&&(K=i.RG16UI),X===i.UNSIGNED_INT&&(K=i.RG32UI),X===i.BYTE&&(K=i.RG8I),X===i.SHORT&&(K=i.RG16I),X===i.INT&&(K=i.RG32I)),E===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(K=i.RGB8UI),X===i.UNSIGNED_SHORT&&(K=i.RGB16UI),X===i.UNSIGNED_INT&&(K=i.RGB32UI),X===i.BYTE&&(K=i.RGB8I),X===i.SHORT&&(K=i.RGB16I),X===i.INT&&(K=i.RGB32I)),E===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),X===i.UNSIGNED_INT&&(K=i.RGBA32UI),X===i.BYTE&&(K=i.RGBA8I),X===i.SHORT&&(K=i.RGBA16I),X===i.INT&&(K=i.RGBA32I)),E===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),E===i.RGBA){let ve=ie?ls:Xe.getTransfer(Q);X===i.FLOAT&&(K=i.RGBA32F),X===i.HALF_FLOAT&&(K=i.RGBA16F),X===i.UNSIGNED_BYTE&&(K=ve===et?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function S(I,E){let X;return I?E===null||E===Jn||E===Ri?X=i.DEPTH24_STENCIL8:E===hn?X=i.DEPTH32F_STENCIL8:E===rr&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Jn||E===Ri?X=i.DEPTH_COMPONENT24:E===hn?X=i.DEPTH_COMPONENT32F:E===rr&&(X=i.DEPTH_COMPONENT16),X}function R(I,E){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==Wt&&I.minFilter!==Kt?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function b(I){let E=I.target;E.removeEventListener("dispose",b),A(E),E.isVideoTexture&&u.delete(E)}function w(I){let E=I.target;E.removeEventListener("dispose",w),y(E)}function A(I){let E=n.get(I);if(E.__webglInit===void 0)return;let X=I.source,Q=h.get(X);if(Q){let ie=Q[E.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&x(I),Object.keys(Q).length===0&&h.delete(X)}n.remove(I)}function x(I){let E=n.get(I);i.deleteTexture(E.__webglTexture);let X=I.source,Q=h.get(X);delete Q[E.__cacheKey],o.memory.textures--}function y(I){let E=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let ie=0;ie<E.__webglFramebuffer[Q].length;ie++)i.deleteFramebuffer(E.__webglFramebuffer[Q][ie]);else i.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)i.deleteFramebuffer(E.__webglFramebuffer[Q]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let X=I.textures;for(let Q=0,ie=X.length;Q<ie;Q++){let K=n.get(X[Q]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(X[Q])}n.remove(I)}let C=0;function L(){C=0}function D(){let I=C;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),C+=1,I}function F(I){let E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function B(I,E){let X=n.get(I);if(I.isVideoTexture&&ye(I),I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){let Q=I.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(X,I,E);return}}t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+E)}function P(I,E){let X=n.get(I);if(I.version>0&&X.__version!==I.version){Z(X,I,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+E)}function O(I,E){let X=n.get(I);if(I.version>0&&X.__version!==I.version){Z(X,I,E);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+E)}function U(I,E){let X=n.get(I);if(I.version>0&&X.__version!==I.version){G(X,I,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+E)}let W={[oo]:i.REPEAT,[Yn]:i.CLAMP_TO_EDGE,[ao]:i.MIRRORED_REPEAT},$={[Wt]:i.NEAREST,[Vu]:i.NEAREST_MIPMAP_NEAREST,[gr]:i.NEAREST_MIPMAP_LINEAR,[Kt]:i.LINEAR,[_s]:i.LINEAR_MIPMAP_NEAREST,[Zn]:i.LINEAR_MIPMAP_LINEAR},j={[qu]:i.NEVER,[ju]:i.ALWAYS,[Yu]:i.LESS,[cc]:i.LEQUAL,[Zu]:i.EQUAL,[Ku]:i.GEQUAL,[Ju]:i.GREATER,[$u]:i.NOTEQUAL};function re(I,E){if(E.type===hn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Kt||E.magFilter===_s||E.magFilter===gr||E.magFilter===Zn||E.minFilter===Kt||E.minFilter===_s||E.minFilter===gr||E.minFilter===Zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,W[E.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,W[E.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,W[E.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,$[E.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,$[E.minFilter]),E.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,j[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Wt||E.minFilter!==gr&&E.minFilter!==Zn||E.type===hn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function _e(I,E){let X=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",b));let Q=E.source,ie=h.get(Q);ie===void 0&&(ie={},h.set(Q,ie));let K=F(E);if(K!==I.__cacheKey){ie[K]===void 0&&(ie[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ie[K].usedTimes++;let ve=ie[I.__cacheKey];ve!==void 0&&(ie[I.__cacheKey].usedTimes--,ve.usedTimes===0&&x(E)),I.__cacheKey=K,I.__webglTexture=ie[K].texture}return X}function Z(I,E,X){let Q=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=i.TEXTURE_3D);let ie=_e(I,E),K=E.source;t.bindTexture(Q,I.__webglTexture,i.TEXTURE0+X);let ve=n.get(K);if(K.version!==ve.__version||ie===!0){t.activeTexture(i.TEXTURE0+X);let ce=Xe.getPrimaries(Xe.workingColorSpace),he=E.colorSpace===$t?null:Xe.getPrimaries(E.colorSpace),We=E.colorSpace===$t||ce===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let se=_(E.image,!1,r.maxTextureSize);se=He(E,se);let me=s.convert(E.format,E.colorSpace),Ie=s.convert(E.type),De=M(E.internalFormat,me,Ie,E.colorSpace,E.isVideoTexture);re(Q,E);let ge,Ge=E.mipmaps,ke=E.isVideoTexture!==!0,tt=ve.__version===void 0||ie===!0,k=K.dataReady,ue=R(E,se);if(E.isDepthTexture)De=S(E.format===Pi,E.type),tt&&(ke?t.texStorage2D(i.TEXTURE_2D,1,De,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,De,se.width,se.height,0,me,Ie,null));else if(E.isDataTexture)if(Ge.length>0){ke&&tt&&t.texStorage2D(i.TEXTURE_2D,ue,De,Ge[0].width,Ge[0].height);for(let J=0,ne=Ge.length;J<ne;J++)ge=Ge[J],ke?k&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,ge.width,ge.height,me,Ie,ge.data):t.texImage2D(i.TEXTURE_2D,J,De,ge.width,ge.height,0,me,Ie,ge.data);E.generateMipmaps=!1}else ke?(tt&&t.texStorage2D(i.TEXTURE_2D,ue,De,se.width,se.height),k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,se.width,se.height,me,Ie,se.data)):t.texImage2D(i.TEXTURE_2D,0,De,se.width,se.height,0,me,Ie,se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ke&&tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,De,Ge[0].width,Ge[0].height,se.depth);for(let J=0,ne=Ge.length;J<ne;J++)if(ge=Ge[J],E.format!==Gt)if(me!==null)if(ke){if(k)if(E.layerUpdates.size>0){let pe=Gl(ge.width,ge.height,E.format,E.type);for(let de of E.layerUpdates){let Oe=ge.data.subarray(de*pe/ge.data.BYTES_PER_ELEMENT,(de+1)*pe/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,de,ge.width,ge.height,1,me,Oe)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ge.width,ge.height,se.depth,me,ge.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,De,ge.width,ge.height,se.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ge.width,ge.height,se.depth,me,Ie,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,De,ge.width,ge.height,se.depth,0,me,Ie,ge.data)}else{ke&&tt&&t.texStorage2D(i.TEXTURE_2D,ue,De,Ge[0].width,Ge[0].height);for(let J=0,ne=Ge.length;J<ne;J++)ge=Ge[J],E.format!==Gt?me!==null?ke?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,ge.width,ge.height,me,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,J,De,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?k&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,ge.width,ge.height,me,Ie,ge.data):t.texImage2D(i.TEXTURE_2D,J,De,ge.width,ge.height,0,me,Ie,ge.data)}else if(E.isDataArrayTexture)if(ke){if(tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,De,se.width,se.height,se.depth),k)if(E.layerUpdates.size>0){let J=Gl(se.width,se.height,E.format,E.type);for(let ne of E.layerUpdates){let pe=se.data.subarray(ne*J/se.data.BYTES_PER_ELEMENT,(ne+1)*J/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ne,se.width,se.height,1,me,Ie,pe)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,me,Ie,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,De,se.width,se.height,se.depth,0,me,Ie,se.data);else if(E.isData3DTexture)ke?(tt&&t.texStorage3D(i.TEXTURE_3D,ue,De,se.width,se.height,se.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,me,Ie,se.data)):t.texImage3D(i.TEXTURE_3D,0,De,se.width,se.height,se.depth,0,me,Ie,se.data);else if(E.isFramebufferTexture){if(tt)if(ke)t.texStorage2D(i.TEXTURE_2D,ue,De,se.width,se.height);else{let J=se.width,ne=se.height;for(let pe=0;pe<ue;pe++)t.texImage2D(i.TEXTURE_2D,pe,De,J,ne,0,me,Ie,null),J>>=1,ne>>=1}}else if(Ge.length>0){if(ke&&tt){let J=Me(Ge[0]);t.texStorage2D(i.TEXTURE_2D,ue,De,J.width,J.height)}for(let J=0,ne=Ge.length;J<ne;J++)ge=Ge[J],ke?k&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,me,Ie,ge):t.texImage2D(i.TEXTURE_2D,J,De,me,Ie,ge);E.generateMipmaps=!1}else if(ke){if(tt){let J=Me(se);t.texStorage2D(i.TEXTURE_2D,ue,De,J.width,J.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,Ie,se)}else t.texImage2D(i.TEXTURE_2D,0,De,me,Ie,se);m(E)&&d(Q),ve.__version=K.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function G(I,E,X){if(E.image.length!==6)return;let Q=_e(I,E),ie=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+X);let K=n.get(ie);if(ie.version!==K.__version||Q===!0){t.activeTexture(i.TEXTURE0+X);let ve=Xe.getPrimaries(Xe.workingColorSpace),ce=E.colorSpace===$t?null:Xe.getPrimaries(E.colorSpace),he=E.colorSpace===$t||ve===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let We=E.isCompressedTexture||E.image[0].isCompressedTexture,se=E.image[0]&&E.image[0].isDataTexture,me=[];for(let ne=0;ne<6;ne++)!We&&!se?me[ne]=_(E.image[ne],!0,r.maxCubemapSize):me[ne]=se?E.image[ne].image:E.image[ne],me[ne]=He(E,me[ne]);let Ie=me[0],De=s.convert(E.format,E.colorSpace),ge=s.convert(E.type),Ge=M(E.internalFormat,De,ge,E.colorSpace),ke=E.isVideoTexture!==!0,tt=K.__version===void 0||Q===!0,k=ie.dataReady,ue=R(E,Ie);re(i.TEXTURE_CUBE_MAP,E);let J;if(We){ke&&tt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,Ge,Ie.width,Ie.height);for(let ne=0;ne<6;ne++){J=me[ne].mipmaps;for(let pe=0;pe<J.length;pe++){let de=J[pe];E.format!==Gt?De!==null?ke?k&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,pe,0,0,de.width,de.height,De,de.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,pe,Ge,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,pe,0,0,de.width,de.height,De,ge,de.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,pe,Ge,de.width,de.height,0,De,ge,de.data)}}}else{if(J=E.mipmaps,ke&&tt){J.length>0&&ue++;let ne=Me(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,Ge,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(se){ke?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,me[ne].width,me[ne].height,De,ge,me[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ge,me[ne].width,me[ne].height,0,De,ge,me[ne].data);for(let pe=0;pe<J.length;pe++){let Oe=J[pe].image[ne].image;ke?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,pe+1,0,0,Oe.width,Oe.height,De,ge,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,pe+1,Ge,Oe.width,Oe.height,0,De,ge,Oe.data)}}else{ke?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,De,ge,me[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ge,De,ge,me[ne]);for(let pe=0;pe<J.length;pe++){let de=J[pe];ke?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,pe+1,0,0,De,ge,de.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,pe+1,Ge,De,ge,de.image[ne])}}}m(E)&&d(i.TEXTURE_CUBE_MAP),K.__version=ie.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function te(I,E,X,Q,ie,K){let ve=s.convert(X.format,X.colorSpace),ce=s.convert(X.type),he=M(X.internalFormat,ve,ce,X.colorSpace),We=n.get(E),se=n.get(X);if(se.__renderTarget=E,!We.__hasExternalTextures){let me=Math.max(1,E.width>>K),Ie=Math.max(1,E.height>>K);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,K,he,me,Ie,E.depth,0,ve,ce,null):t.texImage2D(ie,K,he,me,Ie,0,ve,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),Pe(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,ie,se.__webglTexture,0,Re(E)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,ie,se.__webglTexture,K),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ee(I,E,X){if(i.bindRenderbuffer(i.RENDERBUFFER,I),E.depthBuffer){let Q=E.depthTexture,ie=Q&&Q.isDepthTexture?Q.type:null,K=S(E.stencilBuffer,ie),ve=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=Re(E);Pe(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,K,E.width,E.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,K,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,K,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,I)}else{let Q=E.textures;for(let ie=0;ie<Q.length;ie++){let K=Q[ie],ve=s.convert(K.format,K.colorSpace),ce=s.convert(K.type),he=M(K.internalFormat,ve,ce,K.colorSpace),We=Re(E);X&&Pe(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,We,he,E.width,E.height):Pe(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,We,he,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,he,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xe(I,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=n.get(E.depthTexture);Q.__renderTarget=E,(!Q.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),B(E.depthTexture,0);let ie=Q.__webglTexture,K=Re(E);if(E.depthTexture.format===Si)Pe(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(E.depthTexture.format===Pi)Pe(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Ae(I){let E=n.get(I),X=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){let Q=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Q){let ie=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Q.removeEventListener("dispose",ie)};Q.addEventListener("dispose",ie),E.__depthDisposeCallback=ie}E.__boundDepthTexture=Q}if(I.depthTexture&&!E.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");xe(E.__webglFramebuffer,I)}else if(X){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]===void 0)E.__webglDepthbuffer[Q]=i.createRenderbuffer(),ee(E.__webglDepthbuffer[Q],I,!1);else{let ie=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=E.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,K)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),ee(E.__webglDepthbuffer,I,!1);else{let Q=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ie)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(I,E,X){let Q=n.get(I);E!==void 0&&te(Q.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&Ae(I)}function Ce(I){let E=I.texture,X=n.get(I),Q=n.get(E);I.addEventListener("dispose",w);let ie=I.textures,K=I.isWebGLCubeRenderTarget===!0,ve=ie.length>1;if(ve||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=E.version,o.memory.textures++),K){X.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer[ce]=[];for(let he=0;he<E.mipmaps.length;he++)X.__webglFramebuffer[ce][he]=i.createFramebuffer()}else X.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer=[];for(let ce=0;ce<E.mipmaps.length;ce++)X.__webglFramebuffer[ce]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(ve)for(let ce=0,he=ie.length;ce<he;ce++){let We=n.get(ie[ce]);We.__webglTexture===void 0&&(We.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&Pe(I)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ce=0;ce<ie.length;ce++){let he=ie[ce];X.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[ce]);let We=s.convert(he.format,he.colorSpace),se=s.convert(he.type),me=M(he.internalFormat,We,se,he.colorSpace,I.isXRRenderTarget===!0),Ie=Re(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,me,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,X.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),ee(X.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),re(i.TEXTURE_CUBE_MAP,E);for(let ce=0;ce<6;ce++)if(E.mipmaps&&E.mipmaps.length>0)for(let he=0;he<E.mipmaps.length;he++)te(X.__webglFramebuffer[ce][he],I,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,he);else te(X.__webglFramebuffer[ce],I,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(E)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let ce=0,he=ie.length;ce<he;ce++){let We=ie[ce],se=n.get(We);t.bindTexture(i.TEXTURE_2D,se.__webglTexture),re(i.TEXTURE_2D,We),te(X.__webglFramebuffer,I,We,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,0),m(We)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ce=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,Q.__webglTexture),re(ce,E),E.mipmaps&&E.mipmaps.length>0)for(let he=0;he<E.mipmaps.length;he++)te(X.__webglFramebuffer[he],I,E,i.COLOR_ATTACHMENT0,ce,he);else te(X.__webglFramebuffer,I,E,i.COLOR_ATTACHMENT0,ce,0);m(E)&&d(ce),t.unbindTexture()}I.depthBuffer&&Ae(I)}function le(I){let E=I.textures;for(let X=0,Q=E.length;X<Q;X++){let ie=E[X];if(m(ie)){let K=v(I),ve=n.get(ie).__webglTexture;t.bindTexture(K,ve),d(K),t.unbindTexture()}}}let je=[],z=[];function lt(I){if(I.samples>0){if(Pe(I)===!1){let E=I.textures,X=I.width,Q=I.height,ie=i.COLOR_BUFFER_BIT,K=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(I),ce=E.length>1;if(ce)for(let he=0;he<E.length;he++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let he=0;he<E.length;he++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[he]);let We=n.get(E[he]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,We,0)}i.blitFramebuffer(0,0,X,Q,0,0,X,Q,ie,i.NEAREST),c===!0&&(je.length=0,z.length=0,je.push(i.COLOR_ATTACHMENT0+he),I.depthBuffer&&I.resolveDepthBuffer===!1&&(je.push(K),z.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,je))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let he=0;he<E.length;he++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,ve.__webglColorRenderbuffer[he]);let We=n.get(E[he]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,We,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){let E=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Re(I){return Math.min(r.maxSamples,I.samples)}function Pe(I){let E=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ye(I){let E=o.render.frame;u.get(I)!==E&&(u.set(I,E),I.update())}function He(I,E){let X=I.colorSpace,Q=I.format,ie=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||X!==Ni&&X!==$t&&(Xe.getTransfer(X)===et?(Q!==Gt||ie!==pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),E}function Me(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=L,this.setTexture2D=B,this.setTexture2DArray=P,this.setTexture3D=O,this.setTextureCube=U,this.rebindTextures=Le,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=te,this.useMultisampledRTT=Pe}function sg(i,e){function t(n,r=$t){let s,o=Xe.getTransfer(r);if(n===pn)return i.UNSIGNED_BYTE;if(n===pa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ma)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ec)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===jl)return i.BYTE;if(n===Ql)return i.SHORT;if(n===rr)return i.UNSIGNED_SHORT;if(n===fa)return i.INT;if(n===Jn)return i.UNSIGNED_INT;if(n===hn)return i.FLOAT;if(n===ti)return i.HALF_FLOAT;if(n===tc)return i.ALPHA;if(n===nc)return i.RGB;if(n===Gt)return i.RGBA;if(n===ic)return i.LUMINANCE;if(n===rc)return i.LUMINANCE_ALPHA;if(n===Si)return i.DEPTH_COMPONENT;if(n===Pi)return i.DEPTH_STENCIL;if(n===sc)return i.RED;if(n===ga)return i.RED_INTEGER;if(n===oc)return i.RG;if(n===ya)return i.RG_INTEGER;if(n===xa)return i.RGBA_INTEGER;if(n===Br||n===zr||n===kr||n===Hr)if(o===et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Br)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===kr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Hr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Br)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===kr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Hr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===lo||n===co||n===uo||n===ho)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===lo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===co)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===uo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ho)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fo||n===po||n===mo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===fo||n===po)return o===et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===mo)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===go||n===yo||n===xo||n===_o||n===vo||n===Mo||n===bo||n===So||n===Eo||n===wo||n===To||n===Ao||n===Co||n===Ro)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===go)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===yo)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xo)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_o)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vo)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Mo)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bo)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===So)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Eo)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wo)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===To)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ao)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Co)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ro)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vr||n===Po||n===Io)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Vr)return o===et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Po)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Io)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ac||n===Lo||n===Do||n===Uo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Vr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Lo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Do)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Uo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ri?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Jo=class extends mt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},An=class extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}},og={type:"move"},ir=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new An,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new An,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new An,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),d=this._getHandJoint(l,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;l.inputState.pinching&&h>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(og)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new An;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ag=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,$o=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new Dt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ot({vertexShader:ag,fragmentShader:lg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ve(new Qt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ko=class extends In{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,p=null,g=null,_=new $o,m=t.getContextAttributes(),d=null,v=null,M=[],S=[],R=new Fe,b=null,w=new mt;w.viewport=new qe;let A=new mt;A.viewport=new qe;let x=[w,A],y=new Jo,C=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let G=M[Z];return G===void 0&&(G=new ir,M[Z]=G),G.getTargetRaySpace()},this.getControllerGrip=function(Z){let G=M[Z];return G===void 0&&(G=new ir,M[Z]=G),G.getGripSpace()},this.getHand=function(Z){let G=M[Z];return G===void 0&&(G=new ir,M[Z]=G),G.getHandSpace()};function D(Z){let G=S.indexOf(Z.inputSource);if(G===-1)return;let te=M[G];te!==void 0&&(te.update(Z.inputSource,Z.frame,l||o),te.dispatchEvent({type:Z.type,data:Z.inputSource}))}function F(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",B);for(let Z=0;Z<M.length;Z++){let G=S[Z];G!==null&&(S[Z]=null,M[Z].disconnect(G))}C=null,L=null,_.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,v=null,_e.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",F),r.addEventListener("inputsourceschange",B),m.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){let G={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,G),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Xt(p.framebufferWidth,p.framebufferHeight,{format:Gt,type:pn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let G=null,te=null,ee=null;m.depth&&(ee=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,G=m.stencil?Pi:Si,te=m.stencil?Ri:Jn);let xe={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(xe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Xt(h.textureWidth,h.textureHeight,{format:Gt,type:pn,depthTexture:new es(h.textureWidth,h.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),_e.setContext(r),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function B(Z){for(let G=0;G<Z.removed.length;G++){let te=Z.removed[G],ee=S.indexOf(te);ee>=0&&(S[ee]=null,M[ee].disconnect(te))}for(let G=0;G<Z.added.length;G++){let te=Z.added[G],ee=S.indexOf(te);if(ee===-1){for(let Ae=0;Ae<M.length;Ae++)if(Ae>=S.length){S.push(te),ee=Ae;break}else if(S[Ae]===null){S[Ae]=te,ee=Ae;break}if(ee===-1)break}let xe=M[ee];xe&&xe.connect(te)}}let P=new N,O=new N;function U(Z,G,te){P.setFromMatrixPosition(G.matrixWorld),O.setFromMatrixPosition(te.matrixWorld);let ee=P.distanceTo(O),xe=G.projectionMatrix.elements,Ae=te.projectionMatrix.elements,Le=xe[14]/(xe[10]-1),Ce=xe[14]/(xe[10]+1),le=(xe[9]+1)/xe[5],je=(xe[9]-1)/xe[5],z=(xe[8]-1)/xe[0],lt=(Ae[8]+1)/Ae[0],Re=Le*z,Pe=Le*lt,ye=ee/(-z+lt),He=ye*-z;if(G.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(He),Z.translateZ(ye),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),xe[10]===-1)Z.projectionMatrix.copy(G.projectionMatrix),Z.projectionMatrixInverse.copy(G.projectionMatrixInverse);else{let Me=Le+ye,I=Ce+ye,E=Re-He,X=Pe+(ee-He),Q=le*Ce/I*Me,ie=je*Ce/I*Me;Z.projectionMatrix.makePerspective(E,X,Q,ie,Me,I),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function W(Z,G){G===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(G.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let G=Z.near,te=Z.far;_.texture!==null&&(_.depthNear>0&&(G=_.depthNear),_.depthFar>0&&(te=_.depthFar)),y.near=A.near=w.near=G,y.far=A.far=w.far=te,(C!==y.near||L!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,L=y.far),w.layers.mask=Z.layers.mask|2,A.layers.mask=Z.layers.mask|4,y.layers.mask=w.layers.mask|A.layers.mask;let ee=Z.parent,xe=y.cameras;W(y,ee);for(let Ae=0;Ae<xe.length;Ae++)W(xe[Ae],ee);xe.length===2?U(y,w,A):y.projectionMatrix.copy(w.projectionMatrix),$(Z,y,ee)};function $(Z,G,te){te===null?Z.matrix.copy(G.matrixWorld):(Z.matrix.copy(te.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(G.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(G.projectionMatrix),Z.projectionMatrixInverse.copy(G.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=sr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(Z){c=Z,h!==null&&(h.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let j=null;function re(Z,G){if(u=G.getViewerPose(l||o),g=G,u!==null){let te=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let ee=!1;te.length!==y.cameras.length&&(y.cameras.length=0,ee=!0);for(let Ae=0;Ae<te.length;Ae++){let Le=te[Ae],Ce=null;if(p!==null)Ce=p.getViewport(Le);else{let je=f.getViewSubImage(h,Le);Ce=je.viewport,Ae===0&&(e.setRenderTargetTextures(v,je.colorTexture,h.ignoreDepthValues?void 0:je.depthStencilTexture),e.setRenderTarget(v))}let le=x[Ae];le===void 0&&(le=new mt,le.layers.enable(Ae),le.viewport=new qe,x[Ae]=le),le.matrix.fromArray(Le.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(Le.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),Ae===0&&(y.matrix.copy(le.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ee===!0&&y.cameras.push(le)}let xe=r.enabledFeatures;if(xe&&xe.includes("depth-sensing")){let Ae=f.getDepthInformation(te[0]);Ae&&Ae.isValid&&Ae.texture&&_.init(e,Ae,r.renderState)}}for(let te=0;te<M.length;te++){let ee=S[te],xe=M[te];ee!==null&&xe!==void 0&&xe.update(ee,G,l||o)}j&&j(Z,G),G.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:G}),g=null}let _e=new fc;_e.setAnimationLoop(re),this.setAnimationLoop=function(Z){j=Z},this.dispose=function(){}}},Vn=new jt,cg=new it;function ug(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,dc(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,v,M,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,v,M):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===St&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===St&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let v=e.get(d),M=v.envMap,S=v.envMapRotation;M&&(m.envMap.value=M,Vn.copy(S),Vn.x*=-1,Vn.y*=-1,Vn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Vn.y*=-1,Vn.z*=-1),m.envMapRotation.value.setFromMatrix4(cg.makeRotationFromEuler(Vn)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,v,M){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=M*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===St&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){let v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function hg(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,M){let S=M.program;n.uniformBlockBinding(v,S)}function l(v,M){let S=r[v.id];S===void 0&&(g(v),S=u(v),r[v.id]=S,v.addEventListener("dispose",m));let R=M.program;n.updateUBOMapping(v,R);let b=e.render.frame;s[v.id]!==b&&(h(v),s[v.id]=b)}function u(v){let M=f();v.__bindingPointIndex=M;let S=i.createBuffer(),R=v.__size,b=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,R,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,S),S}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let M=r[v.id],S=v.uniforms,R=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let b=0,w=S.length;b<w;b++){let A=Array.isArray(S[b])?S[b]:[S[b]];for(let x=0,y=A.length;x<y;x++){let C=A[x];if(p(C,b,x,R)===!0){let L=C.__offset,D=Array.isArray(C.value)?C.value:[C.value],F=0;for(let B=0;B<D.length;B++){let P=D[B],O=_(P);typeof P=="number"||typeof P=="boolean"?(C.__data[0]=P,i.bufferSubData(i.UNIFORM_BUFFER,L+F,C.__data)):P.isMatrix3?(C.__data[0]=P.elements[0],C.__data[1]=P.elements[1],C.__data[2]=P.elements[2],C.__data[3]=0,C.__data[4]=P.elements[3],C.__data[5]=P.elements[4],C.__data[6]=P.elements[5],C.__data[7]=0,C.__data[8]=P.elements[6],C.__data[9]=P.elements[7],C.__data[10]=P.elements[8],C.__data[11]=0):(P.toArray(C.__data,F),F+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(v,M,S,R){let b=v.value,w=M+"_"+S;if(R[w]===void 0)return typeof b=="number"||typeof b=="boolean"?R[w]=b:R[w]=b.clone(),!0;{let A=R[w];if(typeof b=="number"||typeof b=="boolean"){if(A!==b)return R[w]=b,!0}else if(A.equals(b)===!1)return A.copy(b),!0}return!1}function g(v){let M=v.uniforms,S=0,R=16;for(let w=0,A=M.length;w<A;w++){let x=Array.isArray(M[w])?M[w]:[M[w]];for(let y=0,C=x.length;y<C;y++){let L=x[y],D=Array.isArray(L.value)?L.value:[L.value];for(let F=0,B=D.length;F<B;F++){let P=D[F],O=_(P),U=S%R,W=U%O.boundary,$=U+W;S+=W,$!==0&&R-$<O.storage&&(S+=R-$),L.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=S,S+=O.storage}}}let b=S%R;return b>0&&(S+=R-b),v.__size=S,v.__cache={},this}function _(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function m(v){let M=v.target;M.removeEventListener("dispose",m);let S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function d(){for(let v in r)i.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:c,update:l,dispose:d}}var ts=class{constructor(e={}){let{canvas:t=mh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,d=null,v=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pt,this.toneMapping=Rn,this.toneMappingExposure=1;let S=this,R=!1,b=0,w=0,A=null,x=-1,y=null,C=new qe,L=new qe,D=null,F=new we(0),B=0,P=t.width,O=t.height,U=1,W=null,$=null,j=new qe(0,0,P,O),re=new qe(0,0,P,O),_e=!1,Z=new ar,G=!1,te=!1,ee=new it,xe=new it,Ae=new N,Le=new qe,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},le=!1;function je(){return A===null?U:1}let z=n;function lt(T,H){return t.getContext(T,H)}try{let T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",de,!1),z===null){let H="webgl2";if(z=lt(H,T),z===null)throw lt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Re,Pe,ye,He,Me,I,E,X,Q,ie,K,ve,ce,he,We,se,me,Ie,De,ge,Ge,ke,tt,k;function ue(){Re=new Ap(z),Re.init(),ke=new sg(z,Re),Pe=new Mp(z,Re,e,ke),ye=new ng(z,Re),Pe.reverseDepthBuffer&&h&&ye.buffers.depth.setReversed(!0),He=new Pp(z),Me=new Gm,I=new rg(z,Re,ye,Me,Pe,ke,He),E=new Sp(S),X=new Tp(S),Q=new Nh(z),tt=new _p(z,Q),ie=new Cp(z,Q,He,tt),K=new Lp(z,ie,Q,He),De=new Ip(z,Pe,I),se=new bp(Me),ve=new Vm(S,E,X,Re,Pe,tt,se),ce=new ug(S,Me),he=new Xm,We=new Km(Re),Ie=new xp(S,E,X,ye,K,p,c),me=new eg(S,K,Pe),k=new hg(z,He,Pe,ye),ge=new vp(z,Re,He),Ge=new Rp(z,Re,He),He.programs=ve.programs,S.capabilities=Pe,S.extensions=Re,S.properties=Me,S.renderLists=he,S.shadowMap=me,S.state=ye,S.info=He}ue();let J=new Ko(S,z);this.xr=J,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let T=Re.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Re.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(T){T!==void 0&&(U=T,this.setSize(P,O,!1))},this.getSize=function(T){return T.set(P,O)},this.setSize=function(T,H,q=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=T,O=H,t.width=Math.floor(T*U),t.height=Math.floor(H*U),q===!0&&(t.style.width=T+"px",t.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(P*U,O*U).floor()},this.setDrawingBufferSize=function(T,H,q){P=T,O=H,U=q,t.width=Math.floor(T*q),t.height=Math.floor(H*q),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(C)},this.getViewport=function(T){return T.copy(j)},this.setViewport=function(T,H,q,Y){T.isVector4?j.set(T.x,T.y,T.z,T.w):j.set(T,H,q,Y),ye.viewport(C.copy(j).multiplyScalar(U).round())},this.getScissor=function(T){return T.copy(re)},this.setScissor=function(T,H,q,Y){T.isVector4?re.set(T.x,T.y,T.z,T.w):re.set(T,H,q,Y),ye.scissor(L.copy(re).multiplyScalar(U).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(T){ye.setScissorTest(_e=T)},this.setOpaqueSort=function(T){W=T},this.setTransparentSort=function(T){$=T},this.getClearColor=function(T){return T.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(T=!0,H=!0,q=!0){let Y=0;if(T){let V=!1;if(A!==null){let oe=A.texture.format;V=oe===xa||oe===ya||oe===ga}if(V){let oe=A.texture.type,fe=oe===pn||oe===Jn||oe===rr||oe===Ri||oe===pa||oe===ma,be=Ie.getClearColor(),Se=Ie.getClearAlpha(),Ue=be.r,Be=be.g,Ee=be.b;fe?(g[0]=Ue,g[1]=Be,g[2]=Ee,g[3]=Se,z.clearBufferuiv(z.COLOR,0,g)):(_[0]=Ue,_[1]=Be,_[2]=Ee,_[3]=Se,z.clearBufferiv(z.COLOR,0,_))}else Y|=z.COLOR_BUFFER_BIT}H&&(Y|=z.DEPTH_BUFFER_BIT),q&&(Y|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",de,!1),he.dispose(),We.dispose(),Me.dispose(),E.dispose(),X.dispose(),K.dispose(),tt.dispose(),k.dispose(),ve.dispose(),J.dispose(),J.removeEventListener("sessionstart",Fa),J.removeEventListener("sessionend",Na),Nn.stop()};function ne(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let T=He.autoReset,H=me.enabled,q=me.autoUpdate,Y=me.needsUpdate,V=me.type;ue(),He.autoReset=T,me.enabled=H,me.autoUpdate=q,me.needsUpdate=Y,me.type=V}function de(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Oe(T){let H=T.target;H.removeEventListener("dispose",Oe),at(H)}function at(T){_t(T),Me.remove(T)}function _t(T){let H=Me.get(T).programs;H!==void 0&&(H.forEach(function(q){ve.releaseProgram(q)}),T.isShaderMaterial&&ve.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,q,Y,V,oe){H===null&&(H=Ce);let fe=V.isMesh&&V.matrixWorld.determinant()<0,be=uu(T,H,q,Y,V);ye.setMaterial(Y,fe);let Se=q.index,Ue=1;if(Y.wireframe===!0){if(Se=ie.getWireframeAttribute(q),Se===void 0)return;Ue=2}let Be=q.drawRange,Ee=q.attributes.position,Ze=Be.start*Ue,nt=(Be.start+Be.count)*Ue;oe!==null&&(Ze=Math.max(Ze,oe.start*Ue),nt=Math.min(nt,(oe.start+oe.count)*Ue)),Se!==null?(Ze=Math.max(Ze,0),nt=Math.min(nt,Se.count)):Ee!=null&&(Ze=Math.max(Ze,0),nt=Math.min(nt,Ee.count));let rt=nt-Ze;if(rt<0||rt===1/0)return;tt.setup(V,Y,be,q,Se);let Ct,$e=ge;if(Se!==null&&(Ct=Q.get(Se),$e=Ge,$e.setIndex(Ct)),V.isMesh)Y.wireframe===!0?(ye.setLineWidth(Y.wireframeLinewidth*je()),$e.setMode(z.LINES)):$e.setMode(z.TRIANGLES);else if(V.isLine){let Te=Y.linewidth;Te===void 0&&(Te=1),ye.setLineWidth(Te*je()),V.isLineSegments?$e.setMode(z.LINES):V.isLineLoop?$e.setMode(z.LINE_LOOP):$e.setMode(z.LINE_STRIP)}else V.isPoints?$e.setMode(z.POINTS):V.isSprite&&$e.setMode(z.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)$e.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Re.get("WEBGL_multi_draw"))$e.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Te=V._multiDrawStarts,nn=V._multiDrawCounts,Ke=V._multiDrawCount,zt=Se?Q.get(Se).bytesPerElement:1,si=Me.get(Y).currentProgram.getUniforms();for(let Pt=0;Pt<Ke;Pt++)si.setValue(z,"_gl_DrawID",Pt),$e.render(Te[Pt]/zt,nn[Pt])}else if(V.isInstancedMesh)$e.renderInstances(Ze,rt,V.count);else if(q.isInstancedBufferGeometry){let Te=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,nn=Math.min(q.instanceCount,Te);$e.renderInstances(Ze,rt,nn)}else $e.render(Ze,rt)};function Qe(T,H,q){T.transparent===!0&&T.side===un&&T.forceSinglePass===!1?(T.side=St,T.needsUpdate=!0,mr(T,H,q),T.side=Pn,T.needsUpdate=!0,mr(T,H,q),T.side=un):mr(T,H,q)}this.compile=function(T,H,q=null){q===null&&(q=T),d=We.get(q),d.init(H),M.push(d),q.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(d.pushLight(V),V.castShadow&&d.pushShadow(V))}),T!==q&&T.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(d.pushLight(V),V.castShadow&&d.pushShadow(V))}),d.setupLights();let Y=new Set;return T.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let oe=V.material;if(oe)if(Array.isArray(oe))for(let fe=0;fe<oe.length;fe++){let be=oe[fe];Qe(be,q,V),Y.add(be)}else Qe(oe,q,V),Y.add(oe)}),M.pop(),d=null,Y},this.compileAsync=function(T,H,q=null){let Y=this.compile(T,H,q);return new Promise(V=>{function oe(){if(Y.forEach(function(fe){Me.get(fe).currentProgram.isReady()&&Y.delete(fe)}),Y.size===0){V(T);return}setTimeout(oe,10)}Re.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Bt=null;function tn(T){Bt&&Bt(T)}function Fa(){Nn.stop()}function Na(){Nn.start()}let Nn=new fc;Nn.setAnimationLoop(tn),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(T){Bt=T,J.setAnimationLoop(T),T===null?Nn.stop():Nn.start()},J.addEventListener("sessionstart",Fa),J.addEventListener("sessionend",Na),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(H),H=J.getCamera()),T.isScene===!0&&T.onBeforeRender(S,T,H,A),d=We.get(T,M.length),d.init(H),M.push(d),xe.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Z.setFromProjectionMatrix(xe),te=this.localClippingEnabled,G=se.init(this.clippingPlanes,te),m=he.get(T,v.length),m.init(),v.push(m),J.enabled===!0&&J.isPresenting===!0){let oe=S.xr.getDepthSensingMesh();oe!==null&&xs(oe,H,-1/0,S.sortObjects)}xs(T,H,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(W,$),le=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,le&&Ie.addToRenderList(m,T),this.info.render.frame++,G===!0&&se.beginShadows();let q=d.state.shadowsArray;me.render(q,T,H),G===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=m.opaque,V=m.transmissive;if(d.setupLights(),H.isArrayCamera){let oe=H.cameras;if(V.length>0)for(let fe=0,be=oe.length;fe<be;fe++){let Se=oe[fe];Ba(Y,V,T,Se)}le&&Ie.render(T);for(let fe=0,be=oe.length;fe<be;fe++){let Se=oe[fe];Oa(m,T,Se,Se.viewport)}}else V.length>0&&Ba(Y,V,T,H),le&&Ie.render(T),Oa(m,T,H);A!==null&&(I.updateMultisampleRenderTarget(A),I.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(S,T,H),tt.resetDefaultState(),x=-1,y=null,M.pop(),M.length>0?(d=M[M.length-1],G===!0&&se.setGlobalState(S.clippingPlanes,d.state.camera)):d=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function xs(T,H,q,Y){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Z.intersectsSprite(T)){Y&&Le.setFromMatrixPosition(T.matrixWorld).applyMatrix4(xe);let fe=K.update(T),be=T.material;be.visible&&m.push(T,fe,be,q,Le.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Z.intersectsObject(T))){let fe=K.update(T),be=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Le.copy(T.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Le.copy(fe.boundingSphere.center)),Le.applyMatrix4(T.matrixWorld).applyMatrix4(xe)),Array.isArray(be)){let Se=fe.groups;for(let Ue=0,Be=Se.length;Ue<Be;Ue++){let Ee=Se[Ue],Ze=be[Ee.materialIndex];Ze&&Ze.visible&&m.push(T,fe,Ze,q,Le.z,Ee)}}else be.visible&&m.push(T,fe,be,q,Le.z,null)}}let oe=T.children;for(let fe=0,be=oe.length;fe<be;fe++)xs(oe[fe],H,q,Y)}function Oa(T,H,q,Y){let V=T.opaque,oe=T.transmissive,fe=T.transparent;d.setupLightsView(q),G===!0&&se.setGlobalState(S.clippingPlanes,q),Y&&ye.viewport(C.copy(Y)),V.length>0&&pr(V,H,q),oe.length>0&&pr(oe,H,q),fe.length>0&&pr(fe,H,q),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Ba(T,H,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[Y.id]===void 0&&(d.state.transmissionRenderTarget[Y.id]=new Xt(1,1,{generateMipmaps:!0,type:Re.has("EXT_color_buffer_half_float")||Re.has("EXT_color_buffer_float")?ti:pn,minFilter:Zn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));let oe=d.state.transmissionRenderTarget[Y.id],fe=Y.viewport||C;oe.setSize(fe.z,fe.w);let be=S.getRenderTarget();S.setRenderTarget(oe),S.getClearColor(F),B=S.getClearAlpha(),B<1&&S.setClearColor(16777215,.5),S.clear(),le&&Ie.render(q);let Se=S.toneMapping;S.toneMapping=Rn;let Ue=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),d.setupLightsView(Y),G===!0&&se.setGlobalState(S.clippingPlanes,Y),pr(T,q,Y),I.updateMultisampleRenderTarget(oe),I.updateRenderTargetMipmap(oe),Re.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Ee=0,Ze=H.length;Ee<Ze;Ee++){let nt=H[Ee],rt=nt.object,Ct=nt.geometry,$e=nt.material,Te=nt.group;if($e.side===un&&rt.layers.test(Y.layers)){let nn=$e.side;$e.side=St,$e.needsUpdate=!0,za(rt,q,Y,Ct,$e,Te),$e.side=nn,$e.needsUpdate=!0,Be=!0}}Be===!0&&(I.updateMultisampleRenderTarget(oe),I.updateRenderTargetMipmap(oe))}S.setRenderTarget(be),S.setClearColor(F,B),Ue!==void 0&&(Y.viewport=Ue),S.toneMapping=Se}function pr(T,H,q){let Y=H.isScene===!0?H.overrideMaterial:null;for(let V=0,oe=T.length;V<oe;V++){let fe=T[V],be=fe.object,Se=fe.geometry,Ue=Y===null?fe.material:Y,Be=fe.group;be.layers.test(q.layers)&&za(be,H,q,Se,Ue,Be)}}function za(T,H,q,Y,V,oe){T.onBeforeRender(S,H,q,Y,V,oe),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(S,H,q,Y,T,oe),V.transparent===!0&&V.side===un&&V.forceSinglePass===!1?(V.side=St,V.needsUpdate=!0,S.renderBufferDirect(q,H,Y,V,T,oe),V.side=Pn,V.needsUpdate=!0,S.renderBufferDirect(q,H,Y,V,T,oe),V.side=un):S.renderBufferDirect(q,H,Y,V,T,oe),T.onAfterRender(S,H,q,Y,V,oe)}function mr(T,H,q){H.isScene!==!0&&(H=Ce);let Y=Me.get(T),V=d.state.lights,oe=d.state.shadowsArray,fe=V.state.version,be=ve.getParameters(T,V.state,oe,H,q),Se=ve.getProgramCacheKey(be),Ue=Y.programs;Y.environment=T.isMeshStandardMaterial?H.environment:null,Y.fog=H.fog,Y.envMap=(T.isMeshStandardMaterial?X:E).get(T.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&T.envMap===null?H.environmentRotation:T.envMapRotation,Ue===void 0&&(T.addEventListener("dispose",Oe),Ue=new Map,Y.programs=Ue);let Be=Ue.get(Se);if(Be!==void 0){if(Y.currentProgram===Be&&Y.lightsStateVersion===fe)return Ha(T,be),Be}else be.uniforms=ve.getUniforms(T),T.onBeforeCompile(be,S),Be=ve.acquireProgram(be,Se),Ue.set(Se,Be),Y.uniforms=be.uniforms;let Ee=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ee.clippingPlanes=se.uniform),Ha(T,be),Y.needsLights=du(T),Y.lightsStateVersion=fe,Y.needsLights&&(Ee.ambientLightColor.value=V.state.ambient,Ee.lightProbe.value=V.state.probe,Ee.directionalLights.value=V.state.directional,Ee.directionalLightShadows.value=V.state.directionalShadow,Ee.spotLights.value=V.state.spot,Ee.spotLightShadows.value=V.state.spotShadow,Ee.rectAreaLights.value=V.state.rectArea,Ee.ltc_1.value=V.state.rectAreaLTC1,Ee.ltc_2.value=V.state.rectAreaLTC2,Ee.pointLights.value=V.state.point,Ee.pointLightShadows.value=V.state.pointShadow,Ee.hemisphereLights.value=V.state.hemi,Ee.directionalShadowMap.value=V.state.directionalShadowMap,Ee.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ee.spotShadowMap.value=V.state.spotShadowMap,Ee.spotLightMatrix.value=V.state.spotLightMatrix,Ee.spotLightMap.value=V.state.spotLightMap,Ee.pointShadowMap.value=V.state.pointShadowMap,Ee.pointShadowMatrix.value=V.state.pointShadowMatrix),Y.currentProgram=Be,Y.uniformsList=null,Be}function ka(T){if(T.uniformsList===null){let H=T.currentProgram.getUniforms();T.uniformsList=wi.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function Ha(T,H){let q=Me.get(T);q.outputColorSpace=H.outputColorSpace,q.batching=H.batching,q.batchingColor=H.batchingColor,q.instancing=H.instancing,q.instancingColor=H.instancingColor,q.instancingMorph=H.instancingMorph,q.skinning=H.skinning,q.morphTargets=H.morphTargets,q.morphNormals=H.morphNormals,q.morphColors=H.morphColors,q.morphTargetsCount=H.morphTargetsCount,q.numClippingPlanes=H.numClippingPlanes,q.numIntersection=H.numClipIntersection,q.vertexAlphas=H.vertexAlphas,q.vertexTangents=H.vertexTangents,q.toneMapping=H.toneMapping}function uu(T,H,q,Y,V){H.isScene!==!0&&(H=Ce),I.resetTextureUnits();let oe=H.fog,fe=Y.isMeshStandardMaterial?H.environment:null,be=A===null?S.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ni,Se=(Y.isMeshStandardMaterial?X:E).get(Y.envMap||fe),Ue=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Be=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ee=!!q.morphAttributes.position,Ze=!!q.morphAttributes.normal,nt=!!q.morphAttributes.color,rt=Rn;Y.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(rt=S.toneMapping);let Ct=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,$e=Ct!==void 0?Ct.length:0,Te=Me.get(Y),nn=d.state.lights;if(G===!0&&(te===!0||T!==y)){let Ut=T===y&&Y.id===x;se.setState(Y,T,Ut)}let Ke=!1;Y.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==nn.state.version||Te.outputColorSpace!==be||V.isBatchedMesh&&Te.batching===!1||!V.isBatchedMesh&&Te.batching===!0||V.isBatchedMesh&&Te.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Te.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Te.instancing===!1||!V.isInstancedMesh&&Te.instancing===!0||V.isSkinnedMesh&&Te.skinning===!1||!V.isSkinnedMesh&&Te.skinning===!0||V.isInstancedMesh&&Te.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Te.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Te.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Te.instancingMorph===!1&&V.morphTexture!==null||Te.envMap!==Se||Y.fog===!0&&Te.fog!==oe||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==se.numPlanes||Te.numIntersection!==se.numIntersection)||Te.vertexAlphas!==Ue||Te.vertexTangents!==Be||Te.morphTargets!==Ee||Te.morphNormals!==Ze||Te.morphColors!==nt||Te.toneMapping!==rt||Te.morphTargetsCount!==$e)&&(Ke=!0):(Ke=!0,Te.__version=Y.version);let zt=Te.currentProgram;Ke===!0&&(zt=mr(Y,H,V));let si=!1,Pt=!1,qi=!1,st=zt.getUniforms(),Zt=Te.uniforms;if(ye.useProgram(zt.program)&&(si=!0,Pt=!0,qi=!0),Y.id!==x&&(x=Y.id,Pt=!0),si||y!==T){ye.buffers.depth.getReversed()?(ee.copy(T.projectionMatrix),yh(ee),xh(ee),st.setValue(z,"projectionMatrix",ee)):st.setValue(z,"projectionMatrix",T.projectionMatrix),st.setValue(z,"viewMatrix",T.matrixWorldInverse);let _n=st.map.cameraPosition;_n!==void 0&&_n.setValue(z,Ae.setFromMatrixPosition(T.matrixWorld)),Pe.logarithmicDepthBuffer&&st.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&st.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),y!==T&&(y=T,Pt=!0,qi=!0)}if(V.isSkinnedMesh){st.setOptional(z,V,"bindMatrix"),st.setOptional(z,V,"bindMatrixInverse");let Ut=V.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),st.setValue(z,"boneTexture",Ut.boneTexture,I))}V.isBatchedMesh&&(st.setOptional(z,V,"batchingTexture"),st.setValue(z,"batchingTexture",V._matricesTexture,I),st.setOptional(z,V,"batchingIdTexture"),st.setValue(z,"batchingIdTexture",V._indirectTexture,I),st.setOptional(z,V,"batchingColorTexture"),V._colorsTexture!==null&&st.setValue(z,"batchingColorTexture",V._colorsTexture,I));let Yi=q.morphAttributes;if((Yi.position!==void 0||Yi.normal!==void 0||Yi.color!==void 0)&&De.update(V,q,zt),(Pt||Te.receiveShadow!==V.receiveShadow)&&(Te.receiveShadow=V.receiveShadow,st.setValue(z,"receiveShadow",V.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Zt.envMap.value=Se,Zt.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&H.environment!==null&&(Zt.envMapIntensity.value=H.environmentIntensity),Pt&&(st.setValue(z,"toneMappingExposure",S.toneMappingExposure),Te.needsLights&&hu(Zt,qi),oe&&Y.fog===!0&&ce.refreshFogUniforms(Zt,oe),ce.refreshMaterialUniforms(Zt,Y,U,O,d.state.transmissionRenderTarget[T.id]),wi.upload(z,ka(Te),Zt,I)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(wi.upload(z,ka(Te),Zt,I),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&st.setValue(z,"center",V.center),st.setValue(z,"modelViewMatrix",V.modelViewMatrix),st.setValue(z,"normalMatrix",V.normalMatrix),st.setValue(z,"modelMatrix",V.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let Ut=Y.uniformsGroups;for(let _n=0,vn=Ut.length;_n<vn;_n++){let Va=Ut[_n];k.update(Va,zt),k.bind(Va,zt)}}return zt}function hu(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function du(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,H,q){Me.get(T.texture).__webglTexture=H,Me.get(T.depthTexture).__webglTexture=q;let Y=Me.get(T);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||Re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,H){let q=Me.get(T);q.__webglFramebuffer=H,q.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(T,H=0,q=0){A=T,b=H,w=q;let Y=!0,V=null,oe=!1,fe=!1;if(T){let Se=Me.get(T);if(Se.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(z.FRAMEBUFFER,null),Y=!1;else if(Se.__webglFramebuffer===void 0)I.setupRenderTarget(T);else if(Se.__hasExternalTextures)I.rebindTextures(T,Me.get(T.texture).__webglTexture,Me.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Ee=T.depthTexture;if(Se.__boundDepthTexture!==Ee){if(Ee!==null&&Me.has(Ee)&&(T.width!==Ee.image.width||T.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(T)}}let Ue=T.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(fe=!0);let Be=Me.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Be[H])?V=Be[H][q]:V=Be[H],oe=!0):T.samples>0&&I.useMultisampledRTT(T)===!1?V=Me.get(T).__webglMultisampledFramebuffer:Array.isArray(Be)?V=Be[q]:V=Be,C.copy(T.viewport),L.copy(T.scissor),D=T.scissorTest}else C.copy(j).multiplyScalar(U).floor(),L.copy(re).multiplyScalar(U).floor(),D=_e;if(ye.bindFramebuffer(z.FRAMEBUFFER,V)&&Y&&ye.drawBuffers(T,V),ye.viewport(C),ye.scissor(L),ye.setScissorTest(D),oe){let Se=Me.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+H,Se.__webglTexture,q)}else if(fe){let Se=Me.get(T.texture),Ue=H||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Se.__webglTexture,q||0,Ue)}x=-1},this.readRenderTargetPixels=function(T,H,q,Y,V,oe,fe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Me.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&fe!==void 0&&(be=be[fe]),be){ye.bindFramebuffer(z.FRAMEBUFFER,be);try{let Se=T.texture,Ue=Se.format,Be=Se.type;if(!Pe.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pe.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-Y&&q>=0&&q<=T.height-V&&z.readPixels(H,q,Y,V,ke.convert(Ue),ke.convert(Be),oe)}finally{let Se=A!==null?Me.get(A).__webglFramebuffer:null;ye.bindFramebuffer(z.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(T,H,q,Y,V,oe,fe){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Me.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&fe!==void 0&&(be=be[fe]),be){let Se=T.texture,Ue=Se.format,Be=Se.type;if(!Pe.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pe.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=T.width-Y&&q>=0&&q<=T.height-V){ye.bindFramebuffer(z.FRAMEBUFFER,be);let Ee=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Ee),z.bufferData(z.PIXEL_PACK_BUFFER,oe.byteLength,z.STREAM_READ),z.readPixels(H,q,Y,V,ke.convert(Ue),ke.convert(Be),0);let Ze=A!==null?Me.get(A).__webglFramebuffer:null;ye.bindFramebuffer(z.FRAMEBUFFER,Ze);let nt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await gh(z,nt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Ee),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,oe),z.deleteBuffer(Ee),z.deleteSync(nt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,H=null,q=0){T.isTexture!==!0&&(Qi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,T=arguments[1]);let Y=Math.pow(2,-q),V=Math.floor(T.image.width*Y),oe=Math.floor(T.image.height*Y),fe=H!==null?H.x:0,be=H!==null?H.y:0;I.setTexture2D(T,0),z.copyTexSubImage2D(z.TEXTURE_2D,q,0,0,fe,be,V,oe),ye.unbindTexture()},this.copyTextureToTexture=function(T,H,q=null,Y=null,V=0){T.isTexture!==!0&&(Qi("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,T=arguments[1],H=arguments[2],V=arguments[3]||0,q=null);let oe,fe,be,Se,Ue,Be,Ee,Ze,nt,rt=T.isCompressedTexture?T.mipmaps[V]:T.image;q!==null?(oe=q.max.x-q.min.x,fe=q.max.y-q.min.y,be=q.isBox3?q.max.z-q.min.z:1,Se=q.min.x,Ue=q.min.y,Be=q.isBox3?q.min.z:0):(oe=rt.width,fe=rt.height,be=rt.depth||1,Se=0,Ue=0,Be=0),Y!==null?(Ee=Y.x,Ze=Y.y,nt=Y.z):(Ee=0,Ze=0,nt=0);let Ct=ke.convert(H.format),$e=ke.convert(H.type),Te;H.isData3DTexture?(I.setTexture3D(H,0),Te=z.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(I.setTexture2DArray(H,0),Te=z.TEXTURE_2D_ARRAY):(I.setTexture2D(H,0),Te=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,H.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,H.unpackAlignment);let nn=z.getParameter(z.UNPACK_ROW_LENGTH),Ke=z.getParameter(z.UNPACK_IMAGE_HEIGHT),zt=z.getParameter(z.UNPACK_SKIP_PIXELS),si=z.getParameter(z.UNPACK_SKIP_ROWS),Pt=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,rt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,rt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Se),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ue),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Be);let qi=T.isDataArrayTexture||T.isData3DTexture,st=H.isDataArrayTexture||H.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){let Zt=Me.get(T),Yi=Me.get(H),Ut=Me.get(Zt.__renderTarget),_n=Me.get(Yi.__renderTarget);ye.bindFramebuffer(z.READ_FRAMEBUFFER,Ut.__webglFramebuffer),ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,_n.__webglFramebuffer);for(let vn=0;vn<be;vn++)qi&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Me.get(T).__webglTexture,V,Be+vn),T.isDepthTexture?(st&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Me.get(H).__webglTexture,V,nt+vn),z.blitFramebuffer(Se,Ue,oe,fe,Ee,Ze,oe,fe,z.DEPTH_BUFFER_BIT,z.NEAREST)):st?z.copyTexSubImage3D(Te,V,Ee,Ze,nt+vn,Se,Ue,oe,fe):z.copyTexSubImage2D(Te,V,Ee,Ze,nt+vn,Se,Ue,oe,fe);ye.bindFramebuffer(z.READ_FRAMEBUFFER,null),ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else st?T.isDataTexture||T.isData3DTexture?z.texSubImage3D(Te,V,Ee,Ze,nt,oe,fe,be,Ct,$e,rt.data):H.isCompressedArrayTexture?z.compressedTexSubImage3D(Te,V,Ee,Ze,nt,oe,fe,be,Ct,rt.data):z.texSubImage3D(Te,V,Ee,Ze,nt,oe,fe,be,Ct,$e,rt):T.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,V,Ee,Ze,oe,fe,Ct,$e,rt.data):T.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,V,Ee,Ze,rt.width,rt.height,Ct,rt.data):z.texSubImage2D(z.TEXTURE_2D,V,Ee,Ze,oe,fe,Ct,$e,rt);z.pixelStorei(z.UNPACK_ROW_LENGTH,nn),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ke),z.pixelStorei(z.UNPACK_SKIP_PIXELS,zt),z.pixelStorei(z.UNPACK_SKIP_ROWS,si),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Pt),V===0&&H.generateMipmaps&&z.generateMipmap(Te),ye.unbindTexture()},this.copyTextureToTexture3D=function(T,H,q=null,Y=null,V=0){return T.isTexture!==!0&&(Qi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,T=arguments[2],H=arguments[3],V=arguments[4]||0),Qi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,H,q,Y,V)},this.initRenderTarget=function(T){Me.get(T).__webglFramebuffer===void 0&&I.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?I.setTextureCube(T,0):T.isData3DTexture?I.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?I.setTexture2DArray(T,0):I.setTexture2D(T,0),ye.unbindTexture()},this.resetState=function(){b=0,w=0,A=null,ye.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}};var Di=class extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jt,this.environmentIntensity=1,this.environmentRotation=new jt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Dn=class extends Dt{constructor(e,t,n,r,s,o,a,c,l){super(e,t,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var jo=class i extends mn{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],o=[];a(r),l(n),u(),this.setAttribute("position",new Tt(s,3)),this.setAttribute("normal",new Tt(s.slice(),3)),this.setAttribute("uv",new Tt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let M=new N,S=new N,R=new N;for(let b=0;b<t.length;b+=3)p(t[b+0],M),p(t[b+1],S),p(t[b+2],R),c(M,S,R,v)}function c(v,M,S,R){let b=R+1,w=[];for(let A=0;A<=b;A++){w[A]=[];let x=v.clone().lerp(S,A/b),y=M.clone().lerp(S,A/b),C=b-A;for(let L=0;L<=C;L++)L===0&&A===b?w[A][L]=x:w[A][L]=x.clone().lerp(y,L/C)}for(let A=0;A<b;A++)for(let x=0;x<2*(b-A)-1;x++){let y=Math.floor(x/2);x%2===0?(h(w[A][y+1]),h(w[A+1][y]),h(w[A][y])):(h(w[A][y+1]),h(w[A+1][y+1]),h(w[A+1][y]))}}function l(v){let M=new N;for(let S=0;S<s.length;S+=3)M.x=s[S+0],M.y=s[S+1],M.z=s[S+2],M.normalize().multiplyScalar(v),s[S+0]=M.x,s[S+1]=M.y,s[S+2]=M.z}function u(){let v=new N;for(let M=0;M<s.length;M+=3){v.x=s[M+0],v.y=s[M+1],v.z=s[M+2];let S=m(v)/2/Math.PI+.5,R=d(v)/Math.PI+.5;o.push(S,1-R)}g(),f()}function f(){for(let v=0;v<o.length;v+=6){let M=o[v+0],S=o[v+2],R=o[v+4],b=Math.max(M,S,R),w=Math.min(M,S,R);b>.9&&w<.1&&(M<.2&&(o[v+0]+=1),S<.2&&(o[v+2]+=1),R<.2&&(o[v+4]+=1))}}function h(v){s.push(v.x,v.y,v.z)}function p(v,M){let S=v*3;M.x=e[S+0],M.y=e[S+1],M.z=e[S+2]}function g(){let v=new N,M=new N,S=new N,R=new N,b=new Fe,w=new Fe,A=new Fe;for(let x=0,y=0;x<s.length;x+=9,y+=6){v.set(s[x+0],s[x+1],s[x+2]),M.set(s[x+3],s[x+4],s[x+5]),S.set(s[x+6],s[x+7],s[x+8]),b.set(o[y+0],o[y+1]),w.set(o[y+2],o[y+3]),A.set(o[y+4],o[y+5]),R.copy(v).add(M).add(S).divideScalar(3);let C=m(R);_(b,y+0,v,C),_(w,y+2,M,C),_(A,y+4,S,C)}}function _(v,M,S,R){R<0&&v.x===1&&(o[M]=v.x-1),S.x===0&&S.z===0&&(o[M]=R/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function d(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var ns=class i extends jo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var yn=class i extends mn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],f=new N,h=new N,p=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){let v=[],M=d/n,S=0;d===0&&o===0?S=.5/t:d===n&&c===Math.PI&&(S=-.5/t);for(let R=0;R<=t;R++){let b=R/t;f.x=-e*Math.cos(r+b*s)*Math.sin(o+M*a),f.y=e*Math.cos(o+M*a),f.z=e*Math.sin(r+b*s)*Math.sin(o+M*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),m.push(b+S,1-M),v.push(l++)}u.push(v)}for(let d=0;d<n;d++)for(let v=0;v<t;v++){let M=u[d][v+1],S=u[d][v],R=u[d+1][v],b=u[d+1][v+1];(d!==0||o>0)&&p.push(M,S,b),(d!==n-1||c<Math.PI)&&p.push(S,R,b)}this.setIndex(p),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(_,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Un=class extends jn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lc,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},xn=class extends Un{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Or(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function dg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ui=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Qo=class extends Ui{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ya,endingEnd:Ya}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Za:s=e,a=2*t-n;break;case Ja:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Za:o=e,c=2*n-t;break;case Ja:o=1,c=n+r[1]-r[0];break;default:o=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(n-t)/(r-t),_=g*g,m=_*g,d=-h*m+2*h*_-h*g,v=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*g+1,M=(-1-p)*m+(1.5+p)*_+.5*g,S=p*m-p*_;for(let R=0;R!==a;++R)s[R]=d*o[u+R]+v*o[l+R]+M*o[c+R]+S*o[f+R];return s}},ea=class extends Ui{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(r-t),f=1-u;for(let h=0;h!==a;++h)s[h]=o[l+h]*f+o[c+h]*u;return s}},ta=class extends Ui{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},qt=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Or(t,this.TimeBufferType),this.values=Or(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Or(e.times,Array),values:Or(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ta(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ea(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Qo(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Gr:t=this.InterpolantFactoryMethodDiscrete;break;case Fo:t=this.InterpolantFactoryMethodLinear;break;case vs:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gr;case this.InterpolantFactoryMethodLinear:return Fo;case this.InterpolantFactoryMethodSmooth:return vs}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&dg(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===vs,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let f=a*n,h=f-n,p=f+n;for(let g=0;g!==n;++g){let _=t[f+g];if(_!==t[h+g]||_!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let f=a*n,h=o*n;for(let p=0;p!==n;++p)t[h+p]=t[f+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};qt.prototype.TimeBufferType=Float32Array;qt.prototype.ValueBufferType=Float32Array;qt.prototype.DefaultInterpolation=Fo;var Qn=class extends qt{constructor(e,t,n){super(e,t,n)}};Qn.prototype.ValueTypeName="bool";Qn.prototype.ValueBufferType=Array;Qn.prototype.DefaultInterpolation=Gr;Qn.prototype.InterpolantFactoryMethodLinear=void 0;Qn.prototype.InterpolantFactoryMethodSmooth=void 0;var na=class extends qt{};na.prototype.ValueTypeName="color";var ia=class extends qt{};ia.prototype.ValueTypeName="number";var ra=class extends Ui{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)Ln.slerpFlat(s,0,o,l-a,o,l,c);return s}},is=class extends qt{InterpolantFactoryMethodLinear(e){return new ra(this.times,this.values,this.getValueSize(),e)}};is.prototype.ValueTypeName="quaternion";is.prototype.InterpolantFactoryMethodSmooth=void 0;var ei=class extends qt{constructor(e,t,n){super(e,t,n)}};ei.prototype.ValueTypeName="string";ei.prototype.ValueBufferType=Array;ei.prototype.DefaultInterpolation=Gr;ei.prototype.InterpolantFactoryMethodLinear=void 0;ei.prototype.InterpolantFactoryMethodSmooth=void 0;var sa=class extends qt{};sa.prototype.ValueTypeName="vector";var oa=class{constructor(e,t,n){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){let f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){let p=l[f],g=l[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}},fg=new oa,aa=class{constructor(e){this.manager=e!==void 0?e:fg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};aa.DEFAULT_MATERIAL_NAME="__DEFAULT";var lr=class extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},rs=class extends lr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ys=new it,Wl=new N,Xl=new N,ss=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ar,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Wl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wl),Xl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xl),t.updateMatrixWorld(),Ys.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ys),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ys)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var ql=new it,ji=new N,Zs=new N,la=class extends ss{constructor(){super(new mt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Fe(4,2),this._viewportCount=6,this._viewports=[new qe(2,1,1,1),new qe(0,1,1,1),new qe(3,1,1,1),new qe(1,1,1,1),new qe(3,0,1,1),new qe(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ji.setFromMatrixPosition(e.matrixWorld),n.position.copy(ji),Zs.copy(n.position),Zs.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Zs),n.updateMatrixWorld(),r.makeTranslation(-ji.x,-ji.y,-ji.z),ql.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ql)}},os=class extends lr{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new la}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ca=class extends ss{constructor(){super(new Qr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},cr=class extends lr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new ca}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ea="\\[\\]\\.:\\/",pg=new RegExp("["+Ea+"]","g"),wa="[^"+Ea+"]",mg="[^"+Ea.replace("\\.","")+"]",gg=/((?:WC+[\/:])*)/.source.replace("WC",wa),yg=/(WCOD+)?/.source.replace("WCOD",mg),xg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wa),_g=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wa),vg=new RegExp("^"+gg+yg+xg+_g+"$"),Mg=["material","materials","bones","map"],ua=class{constructor(e,t,n){let r=n||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ot=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(pg,"")}static parseTrackName(e){let t=vg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Mg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[r];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ot.Composite=ua;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Pg=new Float32Array(1);var Yl=new it,Fi=class{constructor(e,t,n=0,r=1/0){this.ray=new Zr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new or,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Yl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yl),this}intersectObject(e,t=!0,n=[]){return ha(e,this,n,t),n.sort(Zl),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)ha(e[r],this,n,t);return n.sort(Zl),n}};function Zl(i,e){return i.distance-e.distance}function ha(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)ha(s[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var us=class extends Di{constructor(){super();let e=new gn;e.deleteAttribute("uv");let t=new Un({side:St}),n=new Un,r=new os(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let s=new Ve(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let o=new Ve(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new Ve(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let c=new Ve(e,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);let l=new Ve(e,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);let u=new Ve(e,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);let f=new Ve(e,n);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);let h=new Ve(e,zi(50));h.position.set(-16.116,14.37,8.208),h.scale.set(.1,2.428,2.739),this.add(h);let p=new Ve(e,zi(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);let g=new Ve(e,zi(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let _=new Ve(e,zi(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);let m=new Ve(e,zi(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let d=new Ve(e,zi(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function zi(i){let e=new Nt;return e.color.setScalar(i),e}function xc(i){let e;try{e=new ts({canvas:i,antialias:!0,powerPreference:"high-performance"})}catch(l){throw new Error("WebGL n\xE3o est\xE1 dispon\xEDvel neste dispositivo.",{cause:l})}let t=Math.min(devicePixelRatio,2);e.setPixelRatio(t),e.outputColorSpace=pt,e.toneMapping=da,e.toneMappingExposure=1;let n=new Di;n.background=new we("#EFF0F0");let r=new mt(30,1,.1,200),s=new Li(e),o=new us;n.environment=s.fromScene(o,.035).texture,o.dispose(),s.dispose();let a=new cr(16777215,2);a.position.set(4,6,3),n.add(a);let c=new cr(16777215,1);return c.position.set(-5,3,4),n.add(c),n.add(new rs(16777215,15329250,.7)),{renderer:e,scene:n,camera:r,DPR:t}}function _c(i,{page:e=globalThis.document,onPause:t=()=>{}}={}){let n=0,r=!1,s=null,o=null,a=l=>{n=requestAnimationFrame(a);let u=o===null?0:Math.max(0,(l-o)/1e3);o=l;try{i(u),s=null}catch(f){f!==s&&(s=f,console.error("[pururu] frame failed, continuing anyway:",f))}};function c(){e?.hidden?(cancelAnimationFrame(n),n=0,o=null,t()):r&&!n&&(o=null,n=requestAnimationFrame(a))}return{start(){r||(r=!0,e?.addEventListener("visibilitychange",c),c())},stop(){r=!1,e?.removeEventListener("visibilitychange",c),cancelAnimationFrame(n),n=0,o=null}}}var dt=[{id:"soda",body:"#A2EAFF",atten:"#3DB8F6",glow:"#A8EEFF",deep:"#1678C4",logo:"#7FD8FA",trans:1,irid:.2,rainbow:0,rough:.14,name:{ja:"\u30BD\u30FC\u30C0","pt-BR":"Soda",en:"Soda",es:"Soda",zh:"\u82CF\u6253"}},{id:"ichigo",body:"#FFA3C2",atten:"#F2508A",glow:"#FFC6DA",deep:"#D6336C",logo:"#FFA3C2",trans:1,irid:.2,rainbow:0,rough:.14,name:{ja:"\u3044\u3061\u3054","pt-BR":"Morango",en:"Strawberry",es:"Fresa",zh:"\u8349\u8393"}},{id:"melon",body:"#B6EC86",atten:"#58C45E",glow:"#DBFFB4",deep:"#2F8F3A",logo:"#B6EC86",trans:1,irid:.2,rainbow:0,rough:.14,name:{ja:"\u30E1\u30ED\u30F3","pt-BR":"Mel\xE3o",en:"Melon",es:"Mel\xF3n",zh:"\u871C\u74DC"}},{id:"lemon",body:"#FFE27E",atten:"#FFB42A",glow:"#FFF2AE",deep:"#C97800",logo:"#FFE27E",trans:1,irid:.2,rainbow:0,rough:.14,name:{ja:"\u30EC\u30E2\u30F3","pt-BR":"Lim\xE3o",en:"Lemon",es:"Lim\xF3n",zh:"\u67E0\u6AAC"}},{id:"budou",body:"#C6ADFF",atten:"#8A63F5",glow:"#E2D5FF",deep:"#6A45D6",logo:"#C6ADFF",trans:1,irid:.2,rainbow:0,rough:.14,name:{ja:"\u3076\u3069\u3046","pt-BR":"Uva",en:"Grape",es:"Uva",zh:"\u8461\u8404"}},{id:"aurora",body:"#FFFFFF",atten:"#EFEAF8",glow:"#FFFFFF",deep:"#8A6CE0",logo:"#CDBDF4",trans:1,irid:.65,rainbow:1,rough:.085,name:{ja:"\u30AA\u30FC\u30ED\u30E9","pt-BR":"Aurora",en:"Aurora",es:"Aurora",zh:"\u6781\u5149"}},{id:"coffee",body:"#D4AB8C",atten:"#845235",glow:"#F3DFC6",deep:"#764831",logo:"#BA896A",trans:.65,irid:.08,rainbow:0,rough:.2,name:{ja:"\u30B3\u30FC\u30D2\u30FC","pt-BR":"Caf\xE9",en:"Coffee",es:"Caf\xE9",zh:"\u5496\u5561"}},{id:"honey",body:"#F7CC72",atten:"#CC8825",glow:"#FFEDB8",deep:"#9A6014",logo:"#E5B653",trans:.95,irid:.12,rainbow:0,rough:.16,name:{ja:"\u306F\u3061\u307F\u3064","pt-BR":"Mel",en:"Honey",es:"Miel",zh:"\u8702\u871C"}},{id:"matcha",body:"#CAD5A5",atten:"#78974D",glow:"#E2ECCA",deep:"#516F34",logo:"#A8BD83",trans:.7,irid:.1,rainbow:0,rough:.2,name:{ja:"\u62B9\u8336","pt-BR":"Matcha",en:"Matcha",es:"Matcha",zh:"\u62B9\u8336"}},{id:"peach",body:"#FFD0B3",atten:"#EB9375",glow:"#FFE7D5",deep:"#B65A3D",logo:"#F3B194",trans:.9,irid:.15,rainbow:0,rough:.16,name:{ja:"\u3082\u3082","pt-BR":"P\xEAssego",en:"Peach",es:"Melocot\xF3n",zh:"\u6843\u5B50"}},{id:"chocolate",body:"#B58B7A",atten:"#6D4637",glow:"#E2C4B1",deep:"#694334",logo:"#AE8070",trans:.45,irid:.06,rainbow:0,rough:.24,name:{ja:"\u30C1\u30E7\u30B3","pt-BR":"Chocolate",en:"Chocolate",es:"Chocolate",zh:"\u5DE7\u514B\u529B"}},{id:"coconut",body:"#FFF6E4",atten:"#D7CDBB",glow:"#FFFFFF",deep:"#807158",logo:"#DFD3BA",trans:.5,irid:.08,rainbow:0,rough:.19,name:{ja:"\u30B3\u30B3\u30CA\u30C3\u30C4","pt-BR":"Coco",en:"Coconut",es:"Coco",zh:"\u6930\u5B50"}}];var Fn=[{id:"bathroom",background:"#EFF0F0",base:"#F4F3F0",vein:"#8C8F95",warm:"#DCD5CB",pattern:0,name:{ja:"\u6D17\u9762\u53F0","pt-BR":"Banheiro",en:"Bathroom",es:"Ba\xF1o",zh:"\u6D74\u5BA4"}},{id:"kitchen",background:"#EEE7DC",base:"#DEC4A0",vein:"#92704D",warm:"#EBCFA9",pattern:1,name:{ja:"\u30AD\u30C3\u30C1\u30F3","pt-BR":"Cozinha",en:"Kitchen",es:"Cocina",zh:"\u53A8\u623F"}},{id:"garden",background:"#DEE5D8",base:"#E7E5D5",vein:"#A2AB95",warm:"#F1E8D4",pattern:2,name:{ja:"\u5EAD","pt-BR":"Jardim",en:"Garden",es:"Jard\xEDn",zh:"\u82B1\u56ED"}},{id:"studio",background:"#EFE6DF",base:"#F2E7DC",vein:"#BD9984",warm:"#EBDBCC",pattern:2,name:{ja:"\u30A2\u30C8\u30EA\u30A8","pt-BR":"Ateli\xEA",en:"Studio",es:"Taller",zh:"\u5DE5\u4F5C\u5BA4"}}];var ur={curious:{key:"personality.curious",sleepAfter:24,pace:1,tolerance:5},affectionate:{key:"personality.affectionate",sleepAfter:22,pace:.8,tolerance:6},calm:{key:"personality.calm",sleepAfter:18,pace:.6,tolerance:5},mischievous:{key:"personality.mischievous",sleepAfter:30,pace:1.35,tolerance:3},dreamy:{key:"personality.dreamy",sleepAfter:14,pace:.5,tolerance:4},energetic:{key:"personality.energetic",sleepAfter:36,pace:1.6,tolerance:5}},hs={soda:"curious",ichigo:"affectionate",melon:"calm",lemon:"mischievous",budou:"dreamy",aurora:"curious",coffee:"energetic",honey:"dreamy",matcha:"calm",peach:"affectionate",chocolate:"affectionate",coconut:"calm"},ni=[{id:"happy",key:"emotion.happy",mark:"\u25E1"},{id:"angry",key:"emotion.angry",mark:"\u2301"},{id:"surprise",key:"emotion.surprise",mark:"o"},{id:"affection",key:"emotion.affection",mark:"\u2661"},{id:"wink",key:"emotion.wink",mark:";)"},{id:"sleep",key:"emotion.sleep",mark:"z"}],ds=[{id:"jump",key:"action.jump"},{id:"dance",key:"action.dance"},{id:"spin",key:"action.spin"},{id:"sneeze",key:"action.sneeze"},{id:"nap",key:"action.nap"},{id:"hug",key:"action.hug"}],ki=[{id:"none",key:"toy.none"},{id:"sponge",key:"toy.sponge"},{id:"bubbles",key:"toy.bubbles"},{id:"ice",key:"toy.ice"}];var fs="pururu-play-v1",Hi={version:1,plocs:0,flavor:"soda",theme:"bathroom",companion:!1,toy:"none"},Ta=(i,e)=>i.some(t=>t.id===e),Mc=i=>Number.isSafeInteger(i)&&i>=0;function vc(i){return!i||typeof i!="object"||i.version!==1?{...Hi}:{...Hi,plocs:Mc(i.plocs)?i.plocs:0,flavor:Ta(dt,i.flavor)?i.flavor:Hi.flavor,theme:Ta(Fn,i.theme)?i.theme:Hi.theme,companion:i.companion===!0,toy:Ta(ki,i.toy)?i.toy:Hi.toy}}function bg(){try{return globalThis.localStorage}catch{return null}}function bc(i=bg()){let e=new Set;function t(){try{let o=i?.getItem(fs);return o?vc(JSON.parse(o)):null}catch{return null}}let n=t()??{...Hi};function r(){for(let o of e)o({...n})}function s(o){let a=t()??n;n=vc({...a,...o,plocs:Math.max(n.plocs,a.plocs,Mc(o.plocs)?o.plocs:0)});try{i?.setItem(fs,JSON.stringify(n))}catch{}return r(),{...n}}return{get state(){return{...n}},update:s,increment(){let o=Math.max(n.plocs,(t()??n).plocs);return s({plocs:Math.min(Number.MAX_SAFE_INTEGER,o+1)}).plocs},refresh(){let o=t()??n;n={...o,plocs:Math.max(n.plocs,o.plocs)},r()},subscribe(o){return e.add(o),()=>e.delete(o)}}}var Ye=matchMedia("(prefers-reduced-motion: reduce)").matches,ii=matchMedia("(pointer: coarse)").matches,Yt=document.querySelector("#gl"),Aa=document.querySelector("#fx"),ri=document.querySelector("#count"),Vi=document.querySelector("#flavors"),Sc=document.querySelector("#sound"),Gg=document.querySelector("#lang"),Ec=document.querySelector("#nogl");var Je=(i,e,t)=>Math.min(t,Math.max(e,i)),Gi=(i,e,t)=>{let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)},wc=(i,e,t)=>{let n=Math.max(t-Math.abs(i-e),0)/t;return Math.min(i,e)-n*n*t*.25},xt=(i,e,t,n)=>i+(e-i)*(1-Math.exp(-t*n));var ps=.004166666666666667,Ca=10,hr=-4.6;function Tc(i,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=i.getIndex(),r=i.getAttribute("position"),s=n?n.count:r.count,o=0,a=Object.keys(i.attributes),c={},l={},u=[],f=["getX","getY","getZ","getW"],h=["setX","setY","setZ","setW"];for(let v=0,M=a.length;v<M;v++){let S=a[v],R=i.attributes[S];c[S]=new R.constructor(new R.array.constructor(R.count*R.itemSize),R.itemSize,R.normalized);let b=i.morphAttributes[S];b&&(l[S]||(l[S]=[]),b.forEach((w,A)=>{let x=new w.array.constructor(w.count*w.itemSize);l[S][A]=new w.constructor(x,w.itemSize,w.normalized)}))}let p=e*.5,g=Math.log10(1/e),_=Math.pow(10,g),m=p*_;for(let v=0;v<s;v++){let M=n?n.getX(v):v,S="";for(let R=0,b=a.length;R<b;R++){let w=a[R],A=i.getAttribute(w),x=A.itemSize;for(let y=0;y<x;y++)S+=`${~~(A[f[y]](M)*_+m)},`}if(S in t)u.push(t[S]);else{for(let R=0,b=a.length;R<b;R++){let w=a[R],A=i.getAttribute(w),x=i.morphAttributes[w],y=A.itemSize,C=c[w],L=l[w];for(let D=0;D<y;D++){let F=f[D],B=h[D];if(C[B](o,A[F](M)),x)for(let P=0,O=x.length;P<O;P++)L[P][B](o,x[P][F](M))}}t[S]=o,u.push(o),o++}}let d=i.clone();for(let v in i.attributes){let M=c[v];if(d.setAttribute(v,new M.constructor(M.array.slice(0,o*M.itemSize),M.itemSize,M.normalized)),v in l)for(let S=0;S<l[v].length;S++){let R=l[v][S];d.morphAttributes[v][S]=new R.constructor(R.array.slice(0,o*R.itemSize),R.itemSize,R.normalized)}}return d.setIndex(u),d}function Ac(i,{detail:e=i?20:26,radius:t=1.16,floor:n=null}={}){let r=e,s=t,o=new ns(1,r);o.deleteAttribute("normal"),o.deleteAttribute("uv"),o=Tc(o,1e-5);let a=o.attributes.position.count,c=new Float32Array(a*3),l=new Float32Array(a*3),u=new Float32Array(a*3),f=new Float32Array(a*3),h=new Float32Array(a),p=new Float32Array(a),g=new Float32Array(a),_=new Float32Array(a);{let b=o.attributes.position.array;for(let w=0;w<a;w++){let A=w*3,x=b[A],y=b[A+1],C=b[A+2],L=Math.hypot(x,y,C);x/=L,y/=L,C/=L,c[A]=x,c[A+1]=y,c[A+2]=C;let D=y<0?y*.92:y*1.08;D=-wc(-D,.7,.2);let F=1+.11*Gi(.75,-.55,y)-.05*Gi(.3,1,y);l[A]=x*s*1.06*F,l[A+1]=D*s,l[A+2]=C*s*.98*F;let B=Math.hypot(x,C)||1;p[w]=x/B,g[w]=C/B}}let m=1/0,d=-1/0;for(let b=0;b<a;b++)m=Math.min(m,l[b*3+1]),d=Math.max(d,l[b*3+1]);if(n!==null){let b=n-m;for(let w=0;w<a;w++)l[w*3+1]+=b;d+=b,m=n}for(let b=0;b<a;b++)h[b]=.25+.75*Gi(m,d,l[b*3+1]);o.setAttribute("aRest",new Rt(c,3)),o.attributes.position.setUsage(_a),o.computeVertexNormals(),o.attributes.normal.setUsage(_a),o.boundingSphere=new Kn(new N(0,.2,0),5);let v=Array.from({length:a},()=>new Set);{let b=o.index.array;for(let w=0;w<b.length;w+=3){let A=b[w],x=b[w+1],y=b[w+2];v[A].add(x),v[A].add(y),v[x].add(A),v[x].add(y),v[y].add(A),v[y].add(x)}}let M=new Uint32Array(a+1);for(let b=0;b<a;b++)M[b+1]=M[b]+v[b].size;let S=new Uint32Array(M[a]),R=new Float32Array(a);for(let b=0;b<a;b++){let w=M[b];for(let A of v[b])S[w++]=A;R[b]=1/v[b].size}return{geo:o,N:a,unit:c,rest:l,disp:u,vel:f,mob:h,outX:p,outZ:g,gw:_,nbStart:M,nbList:S,invDeg:R,FLOOR:m,TOP:d,HALFW:s*1.06*1.11,pos:o.attributes.position.array,restSqY:(b,w)=>m+(l[b*3+1]-m)*w}}function Cc(i){let e={eye:new qe(1,0,0,0),surprise:{value:0},look:new Fe(0,0),angry:{value:0},affection:{value:0},wink:{value:0}},t=new xn({color:i.current.body,roughness:.14,metalness:0,transmission:1,thickness:1.1,ior:1.36,dispersion:.35,attenuationColor:i.current.atten,attenuationDistance:2.4,clearcoat:1,clearcoatRoughness:.04,specularIntensity:1,iridescence:.2,iridescenceIOR:1.3,iridescenceThicknessRange:[120,700],envMapIntensity:1.2});return t.onBeforeCompile=n=>{n.uniforms.uInk={value:new we("#0A0C12")},n.uniforms.uGlow={value:i.current.glow},n.uniforms.uEye={value:e.eye},n.uniforms.uSurprise=e.surprise,n.uniforms.uLook={value:e.look},n.uniforms.uAngry=e.angry,n.uniforms.uAffection=e.affection,n.uniforms.uWink=e.wink,n.uniforms.uRainbow=i.shader.uRainbow,n.uniforms.uTime=i.shader.uTime,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 aRest;
varying vec3 vRest;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vRest = aRest;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
      varying vec3 vRest;
      uniform vec3 uInk; uniform vec3 uGlow;
      uniform vec4 uEye; uniform float uSurprise; uniform vec2 uLook;
      uniform float uAngry; uniform float uAffection; uniform float uWink;
      uniform float uRainbow; uniform float uTime;
      float gFace; float gHi; float gBlush;
      float sdEllipse(vec2 p, vec2 r){ float k = length(p / r); return (k - 1.0) * min(r.x, r.y); }
      float sdSeg(vec2 p, vec2 a, vec2 b){ vec2 pa = p - a, ba = b - a; float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0); return length(pa - ba * h); }
      float sdArcUp(vec2 q, float r){ if (q.y > 0.0) return abs(length(q) - r); return length(q - vec2(sign(q.x) * r, 0.0)); }
      float fillAA(float d){ float a = fwidth(d) * 0.85 + 1e-5; return 1.0 - smoothstep(-a, a, d); }
      vec3 hue(float h){ return clamp(abs(mod(h * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0); }
      float eyeSDF(vec2 p, float side){
        float open = uEye.x, happy = uEye.y, squeeze = uEye.z, sleep = uEye.w;
        vec2 r = vec2(0.052, 0.094) * (1.0 + 0.16 * uSurprise);
        r.y = max(r.y * open, 0.012);
        r.y *= mix(1.0, 0.62, uAngry);
        float dR = sdEllipse(p, r);
        float dH = sdArcUp(p + vec2(0.0, 0.026), 0.05) - 0.0135;
        vec2 q = vec2(p.x * -side, p.y);
        float dS = min(sdSeg(q, vec2(-0.04, 0.044), vec2(0.036, 0.0)), sdSeg(q, vec2(0.036, 0.0), vec2(-0.04, -0.044))) - 0.0135;
        float dZ = sdArcUp(vec2(p.x, -p.y - 0.02), 0.048) - 0.0115;
        float d = dR;
        d = mix(d, dH, happy);
        d = mix(d, dS, squeeze);
        d = mix(d, dZ, sleep);
        if (side < 0.0) d = mix(d, dZ, uWink);
        return d;
      }
      void computeFace(){
        gFace = 0.0; gHi = 0.0; gBlush = 0.0;
        vec3 n = normalize(vRest);
        if (n.z < 0.12) return;
        vec2 p = n.xy / (0.55 + 0.45 * n.z);
        vec2 look = uLook * vec2(0.036, 0.028);
        vec2 eL = vec2(-0.235, 0.05) + look, eR = vec2(0.235, 0.05) + look;
        float eyeM = fillAA(min(eyeSDF(p - eL, -1.0), eyeSDF(p - eR, 1.0)));
        float s = 1.0 + 0.16 * uSurprise;
        float round_ = (1.0 - uEye.y) * (1.0 - uEye.z) * (1.0 - uEye.w) * smoothstep(0.45, 0.85, uEye.x);
        vec2 qa = p - eL, qb = p - eR;
        float h = 0.0;
        h = max(h, fillAA(sdEllipse(qa - vec2(0.014, 0.046) * s, vec2(0.013, 0.021) * s)));
        h = max(h, fillAA(sdEllipse(qb - vec2(0.014, 0.046) * s, vec2(0.013, 0.021) * s)));
        h = max(h, fillAA(length(qa - vec2(-0.014, -0.052) * s) - 0.0065 * s));
        h = max(h, fillAA(length(qb - vec2(-0.014, -0.052) * s) - 0.0065 * s));
        gHi = h * round_ * eyeM;
        float edge = smoothstep(0.12, 0.34, n.z);
        vec2 mouth = p - vec2(0.0, -0.17);
        float smile = sdArcUp(vec2(mouth.x, -mouth.y - 0.013), 0.052) - 0.009;
        float frown = sdArcUp(mouth + vec2(0.0, 0.025), 0.05) - 0.009;
        float mouthD = mix(smile, frown, uAngry);
        mouthD = mix(mouthD, length(mouth) - 0.028, uSurprise);
        float mouthM = fillAA(mouthD) * max(max(uEye.y, uAffection), max(max(uAngry, uSurprise), uWink));
        float browL = sdSeg(qa, vec2(-0.057, 0.12), vec2(0.049, 0.08)) - 0.008;
        float browR = sdSeg(qb, vec2(-0.049, 0.08), vec2(0.057, 0.12)) - 0.008;
        float brows = fillAA(min(browL, browR)) * uAngry;
        gBlush = fillAA(min(sdEllipse(p - vec2(-0.37, -0.06), vec2(0.07, 0.03)),
                            sdEllipse(p - vec2(0.37, -0.06), vec2(0.07, 0.03)))) * uAffection * edge;
        gFace = max(max(eyeM, mouthM), brows) * edge; gHi *= edge;
      }
      vec3 rainbowAt(vec3 nr, float fr){
        float h = fract(0.58 + fr * 0.8 + nr.y * 0.38 + nr.x * 0.22 + uTime * 0.025);
        return mix(vec3(1.0), hue(h), 0.88);
      }
    `).replace("#include <color_fragment>",`#include <color_fragment>
      computeFace();
      {
        vec3 nr = normalize(vRest);
        vec3 rb = rainbowAt(nr, 0.3);
        // Tint the transmitted light across the whole body, including the crown.
        diffuseColor.rgb = mix(diffuseColor.rgb, rb, uRainbow * 0.72);
      }
      diffuseColor.rgb = mix(diffuseColor.rgb, uInk, gFace);
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0), gHi);
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0, 0.42, 0.5), gBlush * 0.35);
    `).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      {
        vec3 vd = normalize(vViewPosition);
        float fr = 1.0 - clamp(dot(normal, vd), 0.0, 1.0);
        vec3 nr = normalize(vRest);
        float body = (1.0 - gFace);
        totalEmissiveRadiance += uGlow * (0.05 + 0.42 * pow(fr, 2.6) + 0.3 * smoothstep(-0.15, -0.95, nr.y)) * body * (1.0 - uRainbow * 0.9);
        vec3 rb = rainbowAt(nr, fr);
        // Saturated rim light adds life while the center stays see-through.
        totalEmissiveRadiance += rb * uRainbow * (0.3 * pow(fr, 1.7) + 0.035) * body;
        totalEmissiveRadiance += vec3(1.0) * gHi * 0.95;
      }
    `).replace("#include <transmission_fragment>",Ne.transmission_fragment.replace("material.transmission = transmission;","material.transmission = transmission * (1.0 - gFace);"))},{material:t,face:e}}function Rc(i,e,t,n){let r=Ac(t,n),{material:s,face:o}=Cc(e),a=new An;i.add(a);let c=new Ve(r.geo,s);c.frustumCulled=!1,a.add(c);let l=new Nt({color:16777215,toneMapped:!1}),u=[];for(let h=0;h<7;h++){let p=new Ve(new yn(1,12,8),l);p.userData={phase:Math.random(),speed:.04+Math.random()*.05,ang:Math.random()*Math.PI*2,rad:.25+Math.random()*.45,size:.016+Math.random()*.028},u.push(p),a.add(p)}function f(){i.remove(a),r.geo.dispose(),s.dispose(),l.dispose();for(let h of u)h.geometry.dispose()}return{slime:a,mesh:c,material:s,face:o,geometry:r,bubbles:u,dispose:f}}function Pc(i){return{body:{x:0,y:Ye?0:6,z:0,vx:0,vy:0,vz:0,air:!Ye},sq:0,sqv:0,sqTarget:0,pinch:{value:0,last:-10,touchStart:0,touchBase:0},bounds:{xL:-5,xR:5,zMin:-4.6+i.HALFW+.35,zMax:1.5,yMax:2.5},grab:{on:!1,list:null,weights:null,g:-1,id:-1,plane:new yt,offset:new N,target:new N,cursor:new N,desired:new N,stretch:0,maxStretch:0,downX:0,downY:0,downT:0,samples:[]},events:[]}}function Ic(i,e,t){t.fill(0);for(let n=0;n<i.length;n+=3){let r=i[n]*3,s=i[n+1]*3,o=i[n+2]*3,a=e[o]-e[s],c=e[o+1]-e[s+1],l=e[o+2]-e[s+2],u=e[r]-e[s],f=e[r+1]-e[s+1],h=e[r+2]-e[s+2],p=c*h-l*f,g=l*u-a*h,_=a*f-c*u;t[r]+=p,t[r+1]+=g,t[r+2]+=_,t[s]+=p,t[s+1]+=g,t[s+2]+=_,t[o]+=p,t[o+1]+=g,t[o+2]+=_}for(let n=0;n<t.length;n+=3){let r=t[n],s=t[n+1],o=t[n+2],a=1/(Math.sqrt(r*r+s*s+o*o)||1);t[n]*=a,t[n+1]*=a,t[n+2]*=a}}var c0=1/240;function Lc(i,e){let{body:t,grab:n,bounds:r,events:s}=i,{N:o,unit:a,rest:c,disp:l,vel:u,mob:f,outX:h,outZ:p,gw:g,nbStart:_,nbList:m,invDeg:d,geo:v,pos:M,restSqY:S,HALFW:R,FLOOR:b}=e,w=null;function A(P,O,U){let W=P*3,$=c[W],j=c[W+1],re=c[W+2],_e=1/(2*O*O),Z=9*O*O;for(let G=0;G<o;G++){let te=G*3,ee=c[te]-$,xe=c[te+1]-j,Ae=c[te+2]-re,Le=ee*ee+xe*xe+Ae*Ae;Le<Z&&U(G,Math.exp(-Le*_e))}}function x(P,O=4.2){A(P,.36,(U,W)=>{let $=U*3;u[$]-=a[$]*O*W,u[$+1]-=a[$+1]*O*W,u[$+2]-=a[$+2]*O*W}),i.sqv-=1.2}function y(P,O,U){let W=Math.min(U,1);A(P,.32,($,j)=>{let re=$*3;u[re]+=O.x*.16*j-a[re]*.3*j*W,u[re+1]+=O.y*.16*j-a[re+1]*.3*j*W,u[re+2]+=O.z*.16*j-a[re+2]*.3*j*W})}function C(P,O=0,U=0){return t.air||n.on||w!==null?!1:(i.sqv-=2.2,w=setTimeout(()=>{if(w=null,!n.on){t.vy=P,t.vx+=O,t.vz+=U,t.air=!0,t.y=1e-4;for(let W=0;W<o;W++)u[W*3+1]-=P*f[W]*.55}},90),!0)}function L(P,O,U=9){t.vx=Je(t.vx+P,-U,U),t.vz=Je(t.vz+O,-U,U)}function D(P){let O=t.vx,U=t.vy,W=t.vz,$=0;if(n.on)t.vx+=(75*(n.target.x-t.x)-10*t.vx)*P,t.vy+=(75*(n.target.y-t.y)-10*t.vy)*P,t.vz+=(75*(n.target.z-t.z)-10*t.vz)*P,t.air=t.y>.02;else if(t.air)t.vy+=-26*P,$=-26*P;else{let Ce=Math.exp(-2.4*P);t.vx*=Ce,t.vz*=Ce}if(t.x+=t.vx*P,t.y+=t.vy*P,t.z+=t.vz*P,t.y<=0&&(t.air||n.on)){let Ce=-t.vy;t.y=0,!n.on&&Ce>2.8?(t.vy=Ce*.3,t.air=!0):(t.vy=Math.max(0,t.vy),t.air=!1),Ce>.5&&(i.sqv-=Ce*.62,s.push({type:"land",impact:Ce}))}t.y>r.yMax&&(t.y=r.yMax,t.vy>0&&(t.vy*=-.3));let j=r.xL+R,re=r.xR-R;t.x<j&&(t.x=j,t.vx<0&&(s.push({type:"wall",impact:-t.vx}),t.vx*=-.42)),t.x>re&&(t.x=re,t.vx>0&&(s.push({type:"wall",impact:t.vx}),t.vx*=-.42)),t.z<r.zMin&&(t.z=r.zMin,t.vz<0&&(s.push({type:"wall",impact:-t.vz}),t.vz*=-.42)),t.z>r.zMax&&(t.z=r.zMax,t.vz>0&&(s.push({type:"wall",impact:t.vz}),t.vz*=-.42));let _e=t.vx-O,Z=t.vy-U-$,G=t.vz-W;i.sqv+=(-300*(i.sq-i.sqTarget)-4.6*i.sqv)*P,i.sq=Je(i.sq+i.sqv*P,-.5,.95);for(let Ce=0;Ce<o;Ce++){let le=Ce*3,je=0,z=0,lt=0,Re=0,Pe=0,ye=0;for(let ve=_[Ce],ce=_[Ce+1];ve<ce;ve++){let he=m[ve]*3;je+=l[he],z+=l[he+1],lt+=l[he+2],Re+=u[he],Pe+=u[he+1],ye+=u[he+2]}let He=d[Ce],Me=f[Ce]*1,I=l[le],E=l[le+1],X=l[le+2],Q=u[le],ie=u[le+1],K=u[le+2];u[le]+=(-300*I-3.2*Q+900*(je*He-I)+8*(Re*He-Q))*P-_e*Me,u[le+1]+=(-300*E-3.2*ie+900*(z*He-E)+8*(Pe*He-ie))*P-Z*Me,u[le+2]+=(-300*X-3.2*K+900*(lt*He-X)+8*(ye*He-K))*P-G*Me}if(n.on){let Ce=n.list,le=n.weights,je=n.desired.x,z=n.desired.y,lt=n.desired.z;for(let Pe=0;Pe<Ce.length;Pe++){let ye=Ce[Pe]*3,He=le[Pe],Me=1300*He,I=16*He;u[ye]+=(Me*(je*He-l[ye])-I*u[ye])*P,u[ye+1]+=(Me*(z*He-l[ye+1])-I*u[ye+1])*P,u[ye+2]+=(Me*(lt*He-l[ye+2])-I*u[ye+2])*P}let Re=26*Gi(0,.7,t.y);if(Re>0)for(let Pe=0;Pe<o;Pe++)u[Pe*3+1]-=Re*(1-g[Pe])*f[Pe]*P}let te=1+i.sq,ee=1/Math.sqrt(te),xe=r.xL-t.x,Ae=r.xR-t.x,Le=hr-t.z;for(let Ce=0;Ce<o;Ce++){let le=Ce*3;l[le]+=u[le]*P,l[le+1]+=u[le+1]*P,l[le+2]+=u[le+2]*P;let je=t.y+S(Ce,te)+l[le+1];if(je<b){let Re=b-je;l[le+1]+=Re,u[le+1]<0&&(u[le+1]=0),l[le]+=h[Ce]*Re*.65,l[le+2]+=p[Ce]*Re*.65,u[le]*=.94,u[le+2]*=.94}let z=c[le]*ee+l[le];if(z>Ae){let Re=z-Ae;u[le]-=Re*900*P,u[le]>0&&(u[le]*=.8)}else if(z<xe){let Re=xe-z;u[le]+=Re*900*P,u[le]<0&&(u[le]*=.8)}let lt=c[le+2]*ee+l[le+2];if(lt<Le){let Re=Le-lt;u[le+2]+=Re*900*P,u[le+2]<0&&(u[le+2]*=.8)}}}function F(){let P=1+i.sq,O=1/Math.sqrt(P);for(let U=0;U<o;U++){let W=U*3;M[W]=c[W]*O+l[W],M[W+1]=S(U,P)+l[W+1],M[W+2]=c[W+2]*O+l[W+2]}v.attributes.position.needsUpdate=!0,Ic(v.index.array,M,v.attributes.normal.array),v.attributes.normal.needsUpdate=!0}function B(){w!==null&&clearTimeout(w),w=null}return{step:D,writeGeometry:F,forEachNear:A,poke:x,stroke:y,hop:C,push:L,cancelHop:B,dispose:B,FIXED_STEP:1/240}}function Dc(i,e){let{body:t,grab:n,pinch:r}=i,{face:s,physics:o,sfx:a,counter:c,fx:l,raycast:u,camera:f,slime:h}=e,p={last:performance.now()/1e3,sleeping:!1,squeezeUntil:0,happyUntil:0,surpriseUntil:0,strokeLevel:0,nextBlink:1.5,blinkT:-1,nextIdle:6,lastZ:0,lastHearts:0,mood:"",moodUntil:0,angryUntil:0,affectionUntil:0,pose:""},g=0,_=Ye,m=!1;function d(x,{wakeHop:y=!0}={}){p.sleeping&&(p.sleeping=!1,p.surpriseUntil=x+.8,!Ye&&y&&o.hop(3.6),a.wake()),p.last=x}function v(){return ur[hs[e.flavorId?.()??"soda"]]??ur.curious}function M(x,y=3){let C=performance.now()/1e3;d(C,{wakeHop:!1}),p.mood=x,p.moodUntil=C+y,x==="sleep"&&(p.sleeping=!0)}function S(x,y){let C=y-p.last,L=v();if(p.pose){i.sqTarget=0;return}if(!p.sleeping&&C>L.sleepAfter&&!n.on&&!t.air&&(p.sleeping=!0,p.lastZ=y),p.sleeping){i.sqTarget=(Ye?0:-.035+.035*Math.sin(x*1.3))+r.value,y-p.lastZ>1.5&&!Ye&&(p.lastZ=y,l.zzz());return}if(i.sqTarget=(Ye?0:.012*L.pace*Math.sin(x*2.4*L.pace))+r.value,!Ye&&x>p.nextIdle&&(p.nextIdle=x+(4+Math.random()*4)/L.pace,C>6&&!n.on&&!t.air&&_)){let D=-t.x,F=-t.z,B=Math.hypot(D,F);if(B>1.2){let P=Math.min(B,1.6),O=3.6,U=2*O/26;o.hop(O,D/B*P/U*.8,F/B*P/U*.8)}else Math.random()<.35?o.hop(2.8*Math.min(L.pace,1.25)):o.push(Math.random()<.5?-1.2:1.2,0)}}function R(x,y){let C=u.pointer;if(C.over=!1,!(C.has&&!n.on&&m&&e.touches.size<2)){n.on||(C.lastHit=!1),C.moved=!1,p.strokeLevel=Math.max(0,p.strokeLevel-x*.45);return}let L=u.hitTest();if(!L)C.lastHit&&(e.canvas.style.cursor=""),C.lastHit=!1;else{C.over=!0;let D=u.hitVertex(L),F=u.local;if(h.worldToLocal(F.copy(L.point)),C.lastHit&&C.moved){let B=e.strokeV.subVectors(F,e.prevHitLocal).divideScalar(Math.max(x,.008333333333333333)),P=B.length();P>.2&&(P>12&&B.multiplyScalar(12/P),o.stroke(D,B,P),P>2.5&&!t.air&&o.push(B.x*.06,B.z*.06,7),p.strokeLevel=Math.min(2,p.strokeLevel+Math.min(P,6)*x*.35),p.strokeLevel>.45&&(p.angryUntil=0,p.affectionUntil=y+1,p.mood==="angry"&&(p.moodUntil=0),e.onStroke?.()),p.strokeLevel>1.1&&y-p.lastHearts>3.5&&(p.lastHearts=y,l.hearts(C.x,C.y,4),c.bump()))}e.prevHitLocal.copy(F),C.lastHit=!0,e.canvas.style.cursor="grab"}C.moved=!1,p.strokeLevel=Math.max(0,p.strokeLevel-x*.45)}function b(x,y,C){let L={open:1,happy:0,squeeze:0,sleep:0,surprise:0},D=Math.hypot(t.vx,t.vz);p.sleeping?L.sleep=1:n.on?n.stretch/2.3>.5||D>7?L.squeeze=1:t.y>.25?L.surprise=1:L.happy=1:C<p.squeezeUntil?L.squeeze=1:t.air&&t.vy>0?L.happy=1:t.air||D>3?L.surprise=1:Math.abs(r.value)>.2?(L.squeeze=r.value<0?1:0,L.surprise=r.value>0?1:0):C<p.surpriseUntil?L.surprise=1:(C<p.happyUntil||p.strokeLevel>.45)&&(L.happy=1);let F=p.pose||(C<p.moodUntil?p.mood:""),B=C<p.angryUntil?1:0,P=C<p.affectionUntil?1:0,O=0;if(F?(Object.assign(L,{open:1,happy:0,squeeze:0,sleep:0,surprise:0}),B=F==="angry"?1:0,P=F==="affection"?1:0,O=F==="wink"?1:0,(F==="happy"||F==="affection")&&(L.happy=1),F==="surprise"&&(L.surprise=1),F==="sleep"&&(L.sleep=1)):B&&(L.happy=0),!p.sleeping&&!p.pose&&!O&&L.happy+L.squeeze===0){y>p.nextBlink&&(p.blinkT=y,p.nextBlink=y+2+Math.random()*3.5+(Math.random()<.2?-1.6:0));let W=y-p.blinkT;W>=0&&W<.16&&(L.open=Math.abs(W-.08)/.08*.9+.1)}let U=22;s.eye.x=xt(s.eye.x,L.open,L.open<s.eye.x?60:U,x),s.eye.y=xt(s.eye.y,L.happy,U,x),s.eye.z=xt(s.eye.z,L.squeeze,U*1.3,x),s.eye.w=xt(s.eye.w,L.sleep,5,x),s.surprise.value=xt(s.surprise.value,L.surprise,U,x),s.angry.value=xt(s.angry.value,B,U,x),s.affection.value=xt(s.affection.value,P,8,x),s.wink.value=xt(s.wink.value,O,U,x)}function w(x,y){let C=u.pointer,L=0,D=0;p.sleeping||(n.on||C.has?(h.localToWorld(e.projPoint.set(0,.2,0)).project(f),L=Je((C.nx-e.projPoint.x)*1.6,-1,1),D=Je((C.ny-e.projPoint.y)*1.6,-1,1)):ii||(L=Math.sin(y*.37)*.35,D=Math.sin(y*.23)*.2)),s.look.x=xt(s.look.x,L,8,x),s.look.y=xt(s.look.y,D,8,x),g=xt(g,s.look.x*.3,4,x)}function A(x){let y;for(;y=i.events.shift();)if(y.type==="land"){if(y.impact<=2.5)continue;if(p.squeezeUntil=x+.24,p.happyUntil=x+(_?1:2.2),a.land(y.impact),y.impact>4.5&&e.splash(Math.min(7,Math.round(y.impact*.6))),!_){_=!0;let C=l.slimeScreenTop();l.hearts(C.x,C.y+30,4)}}else y.type==="wall"&&y.impact>2&&(p.squeezeUntil=x+.3,p.happyUntil=x+1,a.land(y.impact*.8),y.impact>5&&e.splash(3,.5))}return{ex:p,touch:d,feel:M,personality:v,idle:S,hover:R,updateFace:b,updateGaze:w,drainEvents:A,get yaw(){return g},set started(x){m=x},get started(){return m}}}function Uc(i,{expression:e,physics:t,counter:n,sfx:r,fx:s}){let o=null,a=[],c=0,l=0;function u(){let m=s.slimeScreenTop();s.hearts(m.x,m.y+25,4)}function f(m){ni.some(d=>d.id===m)&&(e.feel(m),m==="affection"&&(a=[],e.ex.angryUntil=0,u()))}function h(){f("affection"),e.ex.strokeLevel=1.5,n.bump(),r.wobble()}function p(m){a=[...a.filter(d=>m-d<4),m],a.length>=e.personality().tolerance&&(e.ex.moodUntil=0,e.ex.angryUntil=m+4,e.ex.happyUntil=0)}function g(m){if(!ds.some(v=>v.id===m)||m==="hug"||i.grab.on)return!1;let d=performance.now()/1e3;return e.touch(d,{wakeHop:!1}),m==="jump"?t.hop(Ye?4:6.8)?(e.feel("happy",1.2),r.jump(),n.bump(),!0):!1:m==="nap"?(o=null,e.feel("sleep"),r.wobble(),n.bump(),!0):(o={id:m,start:d,until:d+(m==="sneeze"?1.4:2.8),fired:!1},e.feel(m==="sneeze"?"surprise":"happy",3),r.wobble(),n.bump(),!0)}function _(m,d){if(c=l=0,!o||d>=o.until||i.grab.on||e.ex.pose){o=null;return}let v=d-o.start;if(o.id==="dance")i.sqTarget+=(Ye?.015:.09)*Math.sin(v*13),l=(Ye?.015:.12)*Math.sin(v*7);else if(o.id==="spin"){let M=Math.min(1,v/2.8);c=Ye?0:Math.PI*4*(M*M*(3-2*M)),i.sqTarget+=(Ye?.01:.04)*Math.sin(v*10)}else o.id==="sneeze"&&(v<.55?i.sqTarget-=.1*Math.sin(v/.55*Math.PI):o.fired||(o.fired=!0,i.sqv-=Ye?.4:2.8,e.feel("happy",.8),r.poke(),Ye||t.hop(3.5)))}return{run:g,emote:f,pet:h,onPoke:p,onStroke:()=>{a=[]},update:_,get rotationY(){return c},get rotationZ(){return l},get current(){return o?.id??null}}}function Fc(){let i={},e={};for(let s of["body","atten","glow"])i[s]=new we(dt[0][s]),e[s]=new we(dt[0][s]);let t={trans:1,irid:.2,rainbow:0,rough:.14},n={...t};return{index:0,current:i,target:e,material:t,materialTarget:n,shader:{uRainbow:{value:0},uTime:{value:0}}}}function Nc(i,e,t){let n=new Fi,r=new Fe,s=new N,o=[],a={x:0,y:0,nx:0,ny:0,has:!1,moved:!1,over:!1,lastHit:!1};function c(f,h){let p=h.getBoundingClientRect();a.x=f.clientX,a.y=f.clientY,a.nx=(f.clientX-p.left)/p.width*2-1,a.ny=-((f.clientY-p.top)/p.height)*2+1,r.set(a.nx,a.ny),a.has=!0}function l(){return n.setFromCamera(r,i),o.length=0,n.intersectObject(e,!1,o),o[0]||null}function u(f){let h=f.face,p=t.worldToLocal(s.copy(f.point)),g=e.geometry.attributes.position.array,_=h.a,m=1/0;for(let d of[h.a,h.b,h.c]){let v=d*3,M=(g[v]-p.x)**2+(g[v+1]-p.y)**2+(g[v+2]-p.z)**2;M<m&&(m=M,_=d)}return _}return{ray:n,ndc:r,pointer:a,setNDC:c,hitTest:l,hitVertex:u,local:s}}function Oc(i,e,t){let{body:n,grab:r,bounds:s}=i,{HALFW:o}=e,{raycast:a,camera:c,canvas:l,slime:u,sfx:f,touch:h,hearts:p,onCount:g,physics:_}=t,m=new N,d=new N;function v(R,b,w){let A=a.hitVertex(R);r.on=!0,r.g=A,r.id=b,r.downX=a.pointer.x,r.downY=a.pointer.y,r.downT=w,r.maxStretch=0,r.stretch=0,c.getWorldDirection(d),r.plane.setFromNormalAndCoplanarPoint(d,R.point),r.offset.set(R.point.x-n.x,R.point.y-n.y,R.point.z-n.z),r.cursor.copy(R.point),r.target.set(n.x,n.y,n.z),r.desired.set(e.disp[A*3],e.disp[A*3+1],e.disp[A*3+2]),r.samples=[{t:w,x:R.point.x,y:R.point.y,z:R.point.z}],e.gw.fill(0);let x=[],y=[];_.forEachNear(A,.42,(C,L)=>{L>.02&&(x.push(C),y.push(L),e.gw[C]=L)}),r.list=Uint32Array.from(x),r.weights=Float32Array.from(y),l.style.cursor="grabbing"}function M(R){a.ray.setFromCamera(a.ndc,c);let b=a.ray.ray.intersectPlane(r.plane,m);if(!b)return;r.cursor.copy(b),r.samples.push({t:R,x:b.x,y:b.y,z:b.z}),r.samples.length>24&&r.samples.shift();let w=b.x-r.offset.x,A=b.y-r.offset.y,x=b.z-r.offset.z;A<0&&(x+=-A*1.25,A=0),r.target.set(Je(w,s.xL+o,s.xR-o),Je(A,0,s.yMax),Je(x,s.zMin,s.zMax));let y=u.worldToLocal(d.copy(b)),C=r.g,L=1+i.sq,D=1/Math.sqrt(L),{rest:F,restSqY:B}=e,P=y.x-F[C*3]*D,O=y.y-B(C,L),U=y.z-F[C*3+2]*D,W=Math.hypot(P,O,U);if(W>5.2){S("slip");return}let $=2.3,j=$*Math.tanh(W/$),re=W>1e-6?j/W:0;r.desired.set(P*re,O*re,U*re);let _e=e.unit[C*3],Z=e.unit[C*3+1],G=e.unit[C*3+2],te=r.desired.x*_e+r.desired.y*Z+r.desired.z*G;if(te<-.3){let ee=te+.3;r.desired.x-=_e*ee,r.desired.y-=Z*ee,r.desired.z-=G*ee}r.stretch=j,r.maxStretch=Math.max(r.maxStretch,j)}function S(R="up"){if(!r.on)return;let b=performance.now()/1e3;r.on=!1,e.gw.fill(0);try{l.releasePointerCapture(r.id)}catch{}if(l.style.cursor=a.pointer.over?"grab":"",R==="cancel")return;let w=Math.hypot(a.pointer.x-r.downX,a.pointer.y-r.downY);if(R==="up"&&w<7&&b-r.downT<.35){_.poke(r.g),t.ex.squeezeUntil=b+.3,t.ex.happyUntil=b+1.5,p(a.pointer.x,a.pointer.y,2),f.poke(),g(),t.onPoke?.(b);return}let A=r.samples,x=A[A.length-1],y=0,C=0,L=0;if(x&&b-x.t<.12){let B=A[0];for(let O=A.length-1;O>=0;O--)if(x.t-A[O].t>=.07){B=A[O];break}let P=Math.max(x.t-B.t,1/60);y=(x.x-B.x)/P,C=(x.y-B.y)/P,L=(x.z-B.z)/P}let D=Math.hypot(y,C,L),F=16;D>F&&(y*=F/D,C*=F/D,L*=F/D),n.vx=n.vx*.3+y*.95,n.vy=n.vy*.3+C*.95,n.vz=n.vz*.3+L*.95,n.vy<0&&n.y<=.02&&(n.vy=0),n.air=n.y>.02||n.vy>.3,i.sqv+=1.4*r.maxStretch,(D>4||r.maxStretch>.6||R==="slip")&&(t.ex.squeezeUntil=b+.22,t.ex.happyUntil=b+1.4,f.boing(Math.min(1,Math.max(D/14,r.maxStretch/2))),g())}return{begin:v,update:M,release:S}}function Bc(i){let{canvas:e,camera:t,world:n,geometry:r,raycast:s,grabCtl:o,physics:a,sfx:c,doJump:l,setFlavor:u,push:f,ex:h,counterPlane:p,onCount:g,touch:_,touches:m}=i,{body:d,grab:v,pinch:M}=n,{HALFW:S,FLOOR:R,N:b,unit:w}=r,A=[],x=()=>!i.isActive||i.isActive();function y(P,O,U,W){let $=j=>{x()&&U(j)};P.addEventListener(O,$,W),A.push(()=>P.removeEventListener(O,$,W))}let C=(P,O,U)=>y(e,P,O,U),L={t:0,x:0,y:0},D=new N;C("pointerdown",P=>{if(P.button!==0&&P.pointerType==="mouse")return;let O=performance.now()/1e3;if(c.unlock(),P.pointerType==="touch"){m.set(P.pointerId,{x:P.clientX,y:P.clientY});try{e.setPointerCapture(P.pointerId)}catch{}if(m.size===2){o.release("cancel");for(let re of m.keys())try{e.setPointerCapture(re)}catch{}let[$,j]=[...m.values()];M.touchStart=Math.hypot($.x-j.x,$.y-j.y)||1,M.touchBase=M.value;return}if(m.size>2)return}s.setNDC(P,e),_(O);let U=s.hitTest(),W=O-L.t<.33&&Math.hypot(P.clientX-L.x,P.clientY-L.y)<40;if(L={t:O,x:P.clientX,y:P.clientY},!U){s.ray.setFromCamera(s.ndc,t),p.constant=-R;let $=s.ray.ray.intersectPlane(p,D);if(h.surpriseUntil=O+.4,$&&!Ye){let j=$.x-d.x,re=$.z-d.z,_e=Math.hypot(j,re),Z=Math.min(_e,4.5);_e>.01&&(j*=Z/_e,re*=Z/_e);let G=4.2+Z*.35,te=2*G/26;a.hop(G,Je(j/te*.8,-9,9),Je(re/te*.8,-9,9))&&c.jump()}else W&&l();return}if(W){l();return}try{e.setPointerCapture(P.pointerId)}catch{}o.begin(U,P.pointerId,O)}),C("pointermove",P=>{if(P.pointerType==="touch"&&m.has(P.pointerId)&&(m.set(P.pointerId,{x:P.clientX,y:P.clientY}),m.size===2)){let[O,U]=[...m.values()],W=Math.hypot(O.x-U.x,O.y-U.y);M.value=Je(M.touchBase+(W/M.touchStart-1)*.9,-.45,.85),M.last=performance.now()/1e3;return}s.setNDC(P,e),s.pointer.moved=!0,_(performance.now()/1e3)});let F=P=>{let O=P.type==="pointercancel";if(P.pointerType==="touch"){let U=m.size>=2;m.delete(P.pointerId),U&&(M.last=-10,M.value=0),!U&&(!v.on||v.id===P.pointerId)&&(O||s.setNDC(P,e),o.release(O?"cancel":"up")),s.pointer.has=m.size>0,s.pointer.moved=!1,s.pointer.over=!1,s.pointer.lastHit=!1,e.style.cursor="";return}if(!(v.on&&v.id!==P.pointerId)){if(O){o.release("cancel"),s.pointer.has=!1;return}s.setNDC(P,e),o.release("up")}};C("pointerup",F),C("pointercancel",F),C("lostpointercapture",P=>{v.on&&v.id===P.pointerId&&(o.release("cancel"),m.delete(P.pointerId),s.pointer.has=!1,s.pointer.lastHit=!1)}),C("pointerleave",P=>{!v.on&&P.pointerType==="mouse"&&(s.pointer.has=!1,s.pointer.over=!1,s.pointer.lastHit=!1,e.style.cursor="")}),C("contextmenu",P=>P.preventDefault()),C("wheel",P=>{P.preventDefault();let O=performance.now()/1e3;_(O);let U=P.deltaMode===1?16:P.deltaMode===2?400:1,W=P.deltaX*U,$=P.deltaY*U;if(P.ctrlKey){M.value=Je(M.value-$*.012,-.45,.85),M.last=O;return}v.on||(f(Je(-W*.022,-2.4,2.4),Je(-$*.018,-2,2)),Math.abs(W)+Math.abs($)>6&&(n.sqv+=.12))},{passive:!1});let B=0;return C("gesturestart",P=>{P.preventDefault(),B=M.value}),C("gesturechange",P=>{P.preventDefault(),M.value=Je(B+(P.scale-1)*.9,-.45,.85),M.last=performance.now()/1e3}),C("gestureend",P=>{P.preventDefault(),M.last=-10}),y(window,"keydown",P=>{if(P.isComposing||P.keyCode===229)return;let O=P.target&&P.target.tagName||"";if(["BUTTON","A","INPUT","SELECT","TEXTAREA"].includes(O)||P.target?.closest?.("dialog[open]"))return;let U=performance.now()/1e3,W={ArrowLeft:[-4,0],ArrowRight:[4,0],ArrowUp:[0,-3.5],ArrowDown:[0,3.5]};if(P.code==="Space")P.preventDefault(),c.unlock(),_(U),l();else if(P.key==="Enter"){P.preventDefault(),c.unlock(),_(U);let $=0,j=-1/0;for(let re=0;re<b;re++){let _e=w[re*3+2]-Math.abs(w[re*3+1]+.25);_e>j&&(j=_e,$=re)}a.poke($),h.squeezeUntil=U+.3,h.happyUntil=U+1.5,c.poke(),g(),i.onPoke?.(U)}else W[P.key]?(P.preventDefault(),_(U),f(...W[P.key]),c.wobble()):/^[1-6]$/.test(P.key)&&u(+P.key-1)}),()=>{for(let P of A)P()}}function zc(i,e,t){let{FLOOR:n,TOP:r}=t,s=new N,o=()=>0,a='<svg viewBox="0 0 24 24"><path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.7 4.5c2.2 0 3.7 1.3 4.3 2.6h2c.6-1.3 2.1-2.6 4.3-2.6 3.7 0 5.8 3.9 4.3 7.3C19.5 16.4 12 21 12 21z" fill="currentColor" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/></svg>';function c(f,h,p=4){Ye&&(p=Math.min(p,1));for(let g=0;g<p;g++){let _=document.createElement("span");_.className="fx-heart",_.innerHTML=a,_.style.color=g%2?"var(--accent-deep)":"#FF6F9E",_.style.left=f+"px",_.style.top=h+"px";let m=-Math.PI/2+(Math.random()-.5)*2.2,d=60+Math.random()*70;_.style.setProperty("--dx",(Math.cos(m)*d).toFixed(1)+"px"),_.style.setProperty("--dy",(Math.sin(m)*d).toFixed(1)+"px"),_.style.setProperty("--rot",((Math.random()-.5)*60).toFixed(1)+"deg"),_.style.setProperty("--s",(14+Math.random()*12).toFixed(0)+"px"),_.style.setProperty("--d",(.9+Math.random()*.6).toFixed(2)+"s"),Aa.appendChild(_),_.addEventListener("animationend",()=>_.remove())}}function l(){return e.localToWorld(s.set(0,n+(r-n)*(1+o()),0)),s.project(i),{x:(s.x*.5+.5)*innerWidth,y:(-s.y*.5+.5)*innerHeight}}function u(){let f=l(),h=document.createElement("span");h.className="fx-z",h.textContent="z",h.style.left=f.x+40+"px",h.style.top=f.y+10+"px",h.style.setProperty("--s",(18+Math.random()*12).toFixed(0)+"px"),Aa.appendChild(h),h.addEventListener("animationend",()=>h.remove())}return{hearts:c,zzz:u,slimeScreenTop:l,useSquash:f=>{o=f}}}function kc(i,e,t){function n(h){let p=document.createElement("canvas");p.width=p.height=256;let g=p.getContext("2d"),_=g.createRadialGradient(128,128,0,128,128,128);for(let[d,v]of h)_.addColorStop(d,`rgba(255,255,255,${v})`);g.fillStyle=_,g.fillRect(0,0,256,256);let m=new Dn(p);return m.colorSpace=$t,m}let r=n([[0,1],[.45,.55],[.75,.15],[1,0]]),s=new we("#3A414B"),o=(h,p)=>{let g=new Ve(new Qt(1,1),new Nt({color:h,alphaMap:r,transparent:!0,depthWrite:!1,opacity:p,toneMapped:!1}));return g.rotation.x=-Math.PI/2,i.add(g),g},a=o(s,.1),c=o(s,.3),l=o(e,.5);function u(h,p,g){let _=1+p,m=Math.max(0,h.y),d=1/Math.sqrt(_),v=t+.004,M=1/(1+m*.8);c.position.set(h.x+.05,v,h.z-.05),c.scale.set(2.1*d*(1+m*.15),1.3*d*(1+m*.15),1),c.material.opacity=.3*M,a.position.set(h.x-.15,v-.001,h.z-.2),a.scale.set(3.4*d*(1+m*.2),2*d,1),a.material.opacity=.09*M,l.position.set(h.x+.1,v+.001,h.z+.35),l.scale.set(2.5*d,1.4*d,1),l.material.opacity=.5*M*(1-.5*g)}function f(){for(let h of[a,c,l])i.remove(h),h.geometry.dispose(),h.material.dispose();r.dispose()}return{shadowSoft:a,shadowCore:c,pool:l,update:u,dispose:f}}function ms(i,e,t){let{canvas:n,counter:r,sfx:s,coarse:o,touches:a,isActive:c,splash:l}=t,u=Fc(),f=Rc(i,u,o,t),{geometry:h,slime:p,mesh:g,material:_,face:m,bubbles:d}=f,v=Pc(h),M=Lc(v,h),S=Nc(e,g,p),R=zc(e,p,h),b=kc(i,u.current.body,h.FLOOR),w=new yt(new N(0,1,0),-h.FLOOR),A,x=Dc(v,{face:m,physics:M,sfx:s,counter:r,fx:R,raycast:S,camera:e,slime:p,canvas:n,touches:a,prevHitLocal:new N,strokeV:new N,projPoint:new N,flavorId:()=>dt[u.index].id,splash:(j,re)=>l?.(j,v.body,re),onStroke:()=>A?.onStroke()});A=Uc(v,{expression:x,physics:M,counter:r,sfx:s,fx:R});let y=Oc(v,h,{raycast:S,camera:e,canvas:n,slime:p,sfx:s,physics:M,ex:x.ex,touch:x.touch,hearts:R.hearts,onCount:r.bump,onPoke:A.onPoke});R.useSquash(()=>v.sq);let C=0,L=()=>{},D=new we(1,1,1),F=(t.radius??1.16)/1.16,B=Object.keys(u.current),P=Object.keys(u.material);function O(j){if(!dt[j])return;u.index=j;let re=dt[j];for(let _e of Object.keys(u.target))u.target[_e].set(re[_e]);Object.assign(u.materialTarget,{trans:re.trans,irid:re.irid,rainbow:re.rainbow,rough:re.rough})}function U(j){L=Bc({canvas:n,camera:e,world:v,geometry:h,raycast:S,grabCtl:y,physics:M,sfx:s,counterPlane:w,touches:a,ex:x.ex,touch:x.touch,onCount:r.bump,onPoke:A.onPoke,doJump:()=>A.run("jump"),setFlavor:j,push:M.push,isActive:c})}function W(j,re,_e){u.shader.uTime.value=re;let Z=1-Math.exp(-j*5);for(let te of B)u.current[te].lerp(u.target[te],Z);for(let te of P)u.material[te]+=(u.materialTarget[te]-u.material[te])*Z;_.color.copy(u.current.body),_.attenuationColor.copy(u.current.atten),_.transmission=u.material.trans,_.iridescence=u.material.irid,_.roughness=u.material.rough,u.shader.uRainbow.value=u.material.rainbow,b.pool.material.color.copy(u.current.body),c()?x.hover(j,_e):(S.pointer.has=!1,S.pointer.lastHit=!1),v.grab.on&&y.update(_e),_e-v.pinch.last>.16&&(v.pinch.value=0),x.idle(re,_e),A.update(re,_e);let G=!1;if(x.started&&!x.ex.pose){C+=j;let te=0;for(;C>=ps&&te<Ca;)M.step(ps),C-=ps,te++;te===Ca&&(C=0),G=te>0}else C=0;x.drainEvents(_e),G&&M.writeGeometry(),x.updateFace(j,re,_e),x.updateGaze(j,re),p.position.set(v.body.x,v.body.y,v.body.z),p.rotation.set(0,x.yaw+A.rotationY,A.rotationZ);for(let te of d){let ee=te.userData;ee.phase=(ee.phase+j*ee.speed*(Ye?.3:1))%1;let xe=h.TOP-h.FLOOR,Ae=h.FLOOR+xe*(.12+ee.phase*.7),Le=ee.rad*F*Math.sin(Math.PI*ee.phase);te.position.set(Math.cos(ee.ang+re*.2)*Le*.9,h.FLOOR+(Ae-h.FLOOR)*(1+v.sq),-.25*F+Math.sin(ee.ang+re*.2)*Le*.5),te.scale.setScalar(ee.size*F*(.3+.7*Math.sin(Math.PI*ee.phase)))}if(b.update(v.body,v.sq,u.material.rainbow),F!==1)for(let te of[b.shadowSoft,b.shadowCore,b.pool])te.scale.multiplyScalar(F)}function $(){L(),y.release("cancel"),M.dispose(),b.dispose(),f.dispose()}return{...f,palette:u,world:v,physics:M,raycast:S,fx:R,expression:x,actions:A,grabCtl:y,bind:U,update:W,setFlavor:O,dispose:$,attenuation:()=>u.current.atten.clone().lerp(D,.3+.7*u.material.rainbow)}}function Hc(i,{scene:e,camera:t,store:n,creatureOptions:r,onCreate:s,onRemove:o,counter:a,sfx:c}){let l=null,u=0,f=0,h=0;function p(m){!!l!=!!m&&(m?(l=ms(e,t,{...r,detail:r.coarse?10:14,radius:.78,floor:i.geometry.FLOOR,isActive:()=>r.isFriendActive(l)}),l.world.body.y=0,l.world.body.air=!1,l.world.body.x=Math.min(i.world.bounds.xR-l.geometry.HALFW,i.world.body.x+1.9),l.world.body.z=i.world.body.z,l.setFlavor(7),l.expression.started=!0,l.physics.writeGeometry(),s(l)):(o(l),l.dispose(),l=null,u=0),n.update({companion:m}))}function g(){if(!l)return!1;i.grabCtl.release("cancel"),l.grabCtl.release("cancel"),i.expression.feel("affection",3),l.expression.feel("affection",3),i.world.body.vx=l.world.body.vx=0,i.world.body.vz=l.world.body.vz=0,u=performance.now()/1e3+2.8;let m=i.fx.slimeScreenTop();return i.fx.hearts(m.x+30,m.y+35,6),a.bump(),c.flavor(),!0}function _(m,d){if(!l)return;Object.assign(l.world.bounds,i.world.bounds);let v=i.world.body,M=l.world.body;if(i.expression.ex.pose||l.expression.ex.pose)return;if(d<u&&!i.world.grab.on&&!l.world.grab.on){let A=(i.geometry.HALFW+l.geometry.HALFW)*.72,x=(v.x+M.x)/2,y=1-Math.exp(-m*4);v.x+=(x-A/2-v.x)*y,M.x+=(x+A/2-M.x)*y,M.z+=(v.z-M.z)*y,i.world.sqTarget=l.world.sqTarget=-.025;return}let S=M.x-v.x,R=M.z-v.z,b=Math.hypot(S,R),w=(i.geometry.HALFW+l.geometry.HALFW)*.82;if(b<w&&Math.abs(v.y-M.y)<1){let A=b>.001?S/b:1,x=b>.001?R/b:0,y=Math.min(.18,w-b);i.world.grab.on||(v.x-=A*y*.4,v.z-=x*y*.4),l.world.grab.on||(M.x+=A*y*.6,M.z+=x*y*.6),d-h>1.5&&(h=d,i.expression.ex.happyUntil=l.expression.ex.happyUntil=d+1,i.world.sqv-=.5,l.world.sqv-=.5)}d>f&&!Ye&&!M.air&&!l.world.grab.on&&(f=d+5+Math.random()*3,b>3?l.physics.hop(3.4,-S/b*2.8,-R/b*2.8):v.air&&(l.physics.hop(3.6),l.expression.ex.happyUntil=d+1))}return{setEnabled:p,hug:g,update:_,get friend(){return l},get enabled(){return!!l}}}var dr=class i extends Ve{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new mt;let n=this,r=t.color!==void 0?new we(t.color):new we(8355711),s=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,c=t.shader||i.ReflectorShader,l=t.multisample!==void 0?t.multisample:4,u=new yt,f=new N,h=new N,p=new N,g=new it,_=new N(0,0,-1),m=new qe,d=new N,v=new N,M=new qe,S=new it,R=this.camera,b=new Xt(s,o,{samples:l,type:ti}),w=new Ot({name:c.name!==void 0?c.name:"unspecified",uniforms:ba.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});w.uniforms.tDiffuse.value=b.texture,w.uniforms.color.value=r,w.uniforms.textureMatrix.value=S,this.material=w,this.onBeforeRender=function(A,x,y){if(h.setFromMatrixPosition(n.matrixWorld),p.setFromMatrixPosition(y.matrixWorld),g.extractRotation(n.matrixWorld),f.set(0,0,1),f.applyMatrix4(g),d.subVectors(h,p),d.dot(f)>0)return;d.reflect(f).negate(),d.add(h),g.extractRotation(y.matrixWorld),_.set(0,0,-1),_.applyMatrix4(g),_.add(p),v.subVectors(h,_),v.reflect(f).negate(),v.add(h),R.position.copy(d),R.up.set(0,1,0),R.up.applyMatrix4(g),R.up.reflect(f),R.lookAt(v),R.far=y.far,R.updateMatrixWorld(),R.projectionMatrix.copy(y.projectionMatrix),S.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),S.multiply(R.projectionMatrix),S.multiply(R.matrixWorldInverse),S.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(f,h),u.applyMatrix4(R.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let C=R.projectionMatrix;M.x=(Math.sign(m.x)+C.elements[8])/C.elements[0],M.y=(Math.sign(m.y)+C.elements[9])/C.elements[5],M.z=-1,M.w=(1+C.elements[10])/C.elements[14],m.multiplyScalar(2/m.dot(M)),C.elements[2]=m.x,C.elements[6]=m.y,C.elements[10]=m.z+1-a,C.elements[14]=m.w,n.visible=!1;let L=A.getRenderTarget(),D=A.xr.enabled,F=A.shadowMap.autoUpdate;A.xr.enabled=!1,A.shadowMap.autoUpdate=!1,A.setRenderTarget(b),A.state.buffers.depth.setMask(!0),A.autoClear===!1&&A.clear(),A.render(x,R),A.xr.enabled=D,A.shadowMap.autoUpdate=F,A.setRenderTarget(L);let B=y.viewport;B!==void 0&&A.state.viewport(B),n.visible=!0},this.getRenderTarget=function(){return b},this.dispose=function(){b.dispose(),n.material.dispose()}}};dr.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};function Vc(i,{floorY:e,DPR:t,wallZ:n,getFrameNo:r}){let s={name:"MarbleCounter",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null},uBase:{value:new we("#F4F3F0")},uVein:{value:new we("#8C8F95")},uWarm:{value:new we("#DCD5CB")},uWallZ:{value:n},uFocal:{value:10},uPattern:{value:0}},vertexShader:`
      uniform mat4 textureMatrix;
      varying vec4 vUv;
      varying vec3 vWorld;
      void main(){
        vUv = textureMatrix * vec4(position, 1.0);
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorld = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      uniform sampler2D tDiffuse;
      uniform vec3 uBase; uniform vec3 uVein; uniform vec3 uWarm;
      uniform float uWallZ; uniform float uFocal;
      uniform float uPattern;
      varying vec4 vUv;
      varying vec3 vWorld;
      float hash(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
      float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y); }
      float fbm(vec2 p){ float s = 0.0, a = 0.5; for (int i = 0; i < 5; i++){ s += a * vnoise(p); p = p * 2.03 + vec2(1.7, 9.2); a *= 0.5; } return s; }
      void main(){
        vec2 p = vWorld.xz * 0.3 + vec2(3.1, 1.7);
        vec2 q = vec2(fbm(p * 0.9), fbm(p * 0.9 + vec2(5.2, 1.3)));
        float f = fbm(p * 1.3 + q * 1.8);
        float v1 = abs(sin((p.x * 0.9 + p.y * 0.55) * 2.0 + f * 5.5));
        float vein = pow(1.0 - v1, 16.0);
        float v2 = abs(sin((p.x * -0.5 + p.y * 1.2) * 4.2 + fbm(p * 2.4 + q) * 7.0));
        vein += pow(1.0 - v2, 34.0) * 0.5;
        float cloud = fbm(p * 3.5 + q);
        float dist = distance(vWorld, cameraPosition);
        float blur = smoothstep(2.5, 9.0, abs(dist - uFocal));
        vein *= mix(1.0, 0.3, blur);
        cloud = mix(cloud, 0.5, blur * 0.8);
        vec3 col = uBase * (0.975 + 0.05 * cloud);
        col = mix(col, uWarm, smoothstep(0.55, 0.8, cloud) * 0.12);
        col = mix(col, uVein, clamp(vein, 0.0, 1.0) * 0.5);
        if (uPattern > 0.5 && uPattern < 1.5) {
          float grain = pow(abs(sin(vWorld.x * 3.5 + fbm(vWorld.xz * 0.7) * 2.8)), 16.0);
          col = mix(uBase, uVein, grain * 0.22 + cloud * 0.09);
        } else if (uPattern > 1.5) col = mix(uBase, uWarm, cloud * 0.16);
        col *= 0.94 + 0.07 * smoothstep(-10.0, 10.0, vWorld.x);
        col *= 1.0 - 0.14 * smoothstep(uWallZ + 1.0, uWallZ, vWorld.z);
        float bl = (0.004 + 0.01 * blur) * vUv.w;
        vec3 r = texture2DProj(tDiffuse, vUv).rgb * 0.36;
        r += texture2DProj(tDiffuse, vUv + vec4( bl, 0.0, 0.0, 0.0)).rgb * 0.16;
        r += texture2DProj(tDiffuse, vUv + vec4(-bl, 0.0, 0.0, 0.0)).rgb * 0.16;
        r += texture2DProj(tDiffuse, vUv + vec4(0.0,  bl, 0.0, 0.0)).rgb * 0.16;
        r += texture2DProj(tDiffuse, vUv + vec4(0.0, -bl, 0.0, 0.0)).rgb * 0.16;
        r = min(r, vec3(1.2));
        vec3 V = normalize(cameraPosition - vWorld);
        float fres = 0.05 + 0.95 * pow(1.0 - clamp(V.y, 0.0, 1.0), 5.0);
        float k = clamp(0.1 + 0.5 * fres, 0.0, 0.5);
        col = mix(col, r, k);
        gl_FragColor = vec4(col, 1.0);
        #include <colorspace_fragment>
      }
    `},o=new dr(new Qt(140,60),{shader:s,textureWidth:Math.round(innerWidth*t*.5),textureHeight:Math.round(innerHeight*t*.5),clipBias:.003,multisample:0});o.rotation.x=-Math.PI/2,o.position.set(0,e,n+30),i.add(o);function a(){let c=o.onBeforeRender;o.userData.lastFrame=-1,o.onBeforeRender=function(...l){this.userData.lastFrame!==r()&&(this.userData.lastFrame=r(),c.apply(this,l))}}return{counter:o,oncePerFrame:a}}function Gc(i,{id:e,W:t,H:n,s:r,X:s,Y:o}){let a=(l,u,f,h,p)=>{i.fillStyle=p,i.fillRect(l,u,f,h)},c=(l,u,f)=>{i.fillStyle="#6F865F";for(let h=0;h<7;h++)i.beginPath(),i.ellipse(l+Math.sin(h*2.5)*f*.55,u-f*(.5+h*.13),f*.23,f*.55,(h-3)*.3,0,Math.PI*2),i.fill();a(l-f*.5,u,f,f*.65,"#B38368")};if(e==="kitchen"){a(0,0,t,n,"#EEE7DC"),i.strokeStyle="#D8CEBF",i.lineWidth=.025*r;for(let l=s(-10);l<t;l+=2.4*r)i.beginPath(),i.moveTo(l,0),i.lineTo(l,n),i.stroke();a(s(-5),o(7.8),6.2*r,5.7*r,"#B8B6A1"),a(s(-4.8),o(7.6),5.8*r,5.3*r,"#FAFAEE"),a(s(-2.1),o(7.6),.1*r,5.3*r,"#CCC4B6"),a(s(-4.8),o(4.9),5.8*r,.1*r,"#CCC4B6"),a(s(2.4),o(3.1),4.6*r,.14*r,"#B18E6C");for(let l=0;l<3;l++)a(s(3+l*.85),o(4.35),.5*r,1.25*r,["#D7C0A3","#ADAF92","#D8D2C4"][l]),a(s(3+l*.85),o(4.43),.5*r,.12*r,"#927960");c(s(4),o(.6),.65*r)}else if(e==="garden"){a(0,0,t,n,"#DFE7D7"),a(0,n*.04,t,n*.35,"#F0F2E6"),i.strokeStyle="#B8C5AC",i.lineWidth=.08*r;for(let l=s(-12);l<t;l+=2*r)i.beginPath(),i.moveTo(l,0),i.lineTo(l,n),i.stroke();a(0,o(2.2),t,.1*r,"#BAC7AB");for(let[l,u,f]of[[-5,.7,1.9],[4.5,.8,2.4],[-2.8,3.5,.8],[6,4.2,1.5]])c(s(l),o(u),f*r)}else{a(0,0,t,n,"#EDE3DA");let l=[[-4.7,7.4,3.2,3.9,"#F9F3E6"],[.5,6.3,2.8,3.2,"#E7C8B3"],[3.8,7.8,2.6,4.5,"#F6EFDF"]];for(let[u,f,h,p,g]of l)a(s(u),o(f),h*r,p*r,g),a(s(u+h*.4),o(f+.1),.7*r,.25*r,"#CFB89E"),i.strokeStyle="#AA8C73",i.lineWidth=.03*r,i.beginPath(),i.ellipse(s(u+h/2),o(f-p/2),h*.24*r,p*.21*r,0,0,Math.PI*2),i.stroke();c(s(-4),o(.7),.7*r),a(s(4),o(1.25),.6*r,1.25*r,"#C7B89F");for(let u=0;u<5;u++)a(s(4.08+u*.09),o(1.9+u%2*.2),.045*r,1.2*r,["#8A9B7A","#BC8C72"][u%2])}}function Wc(i){let e="bathroom",t=20,n=14,r=document.createElement("canvas"),s=new Dn(r);s.colorSpace=pt;let o=new Ve(new Qt(1,1),new Nt({map:s,toneMapped:!1}));i.add(o);function a(l,u,f,h,p,g){l.beginPath(),l.moveTo(u+g,f),l.arcTo(u+h,f,u+h,f+p,g),l.arcTo(u+h,f+p,u,f+p,g),l.arcTo(u,f+p,u,f,g),l.arcTo(u,f,u+h,f,g),l.closePath()}function c(l,u){t=l,n=u;let f=1600,h=f/l,p=Math.round(Je(u*h,300,3200)),g=U=>(U+l/2)*h,_=U=>p-U*h,m=document.createElement("canvas");m.width=f,m.height=p;let d=m.getContext("2d"),v=d.createLinearGradient(0,_(9),0,p);v.addColorStop(0,"#E3E6E9"),v.addColorStop(.6,"#EEF0F0"),v.addColorStop(1,"#F5F5F4"),d.fillStyle=v,d.fillRect(0,0,f,p),v=d.createRadialGradient(g(9),_(4),0,g(9),_(4),9*h),v.addColorStop(0,"rgba(255,255,255,1)"),v.addColorStop(1,"rgba(255,255,255,0)"),d.fillStyle=v,d.fillRect(0,0,f,p),d.strokeStyle="rgba(160,166,174,.26)",d.lineWidth=Math.max(2,.03*h);let M=2.4*h,S=1.2*h,R=0;for(let U=p;U>-S;U-=S,R++){d.beginPath(),d.moveTo(0,U),d.lineTo(f,U),d.stroke();for(let W=R%2*M*.5+g(0)%M;W<f;W+=M)d.beginPath(),d.moveTo(W,U),d.lineTo(W,U-S),d.stroke()}let b=g(-4.2),w=7.6*h,A=_(8.5),x=7.4*h,y=.7*h,C=.12*h;d.save(),d.shadowColor="rgba(0,0,0,.1)",d.shadowBlur=.5*h,d.shadowOffsetY=.12*h,a(d,b,A,w,x,y),d.fillStyle="#CFD6DC",d.fill(),d.restore(),a(d,b+C,A+C,w-2*C,x-2*C,y-C),v=d.createLinearGradient(b,A,b+w,A+x),v.addColorStop(0,"#DCE3E9"),v.addColorStop(1,"#ECF0F3"),d.fillStyle=v,d.fill(),d.save(),a(d,b+C,A+C,w-2*C,x-2*C,y-C),d.clip(),d.fillStyle="rgba(255,255,255,.95)",d.fillRect(b+w*.6,A+x*.1,w*.22,x*.6),d.fillStyle="rgba(160,170,182,.32)",d.fillRect(b+w*.14,A+x*.18,w*.045,x*.82),d.fillStyle="rgba(205,212,220,.55)",d.fillRect(b,A+x*.8,w,x*.2),d.restore();let L=g(-2.6);d.fillStyle="#C6CBD0",a(d,L-.09*h,_(.95),.18*h,.95*h,.08*h),d.fill(),d.fillStyle="#D3D7DB",a(d,L-.09*h,_(.95),.62*h,.14*h,.07*h),d.fill(),d.fillStyle="rgba(255,255,255,.85)",d.fillRect(L-.04*h,_(.9),.035*h,.85*h);let D=g(4.6),F=1.9*h,B=.62*h;v=d.createLinearGradient(D-B/2,0,D+B/2,0),v.addColorStop(0,"rgba(150,196,228,.8)"),v.addColorStop(.5,"rgba(214,234,247,.9)"),v.addColorStop(1,"rgba(140,186,220,.8)"),d.fillStyle=v,a(d,D-B/2,p-F,B,F,.12*h),d.fill(),d.fillStyle="#FFFFFF",a(d,D-B*.38,p-F*.78,B*.76,F*.36,.05*h),d.fill(),d.fillStyle="#F7F7F7",a(d,D-B*.3,p-F-.24*h,B*.6,.26*h,.06*h),d.fill();for(let U=0;U<7;U++)d.fillStyle=U%2?"#EFEFED":"#FFFFFF",d.beginPath(),d.ellipse(g(5.7),p-.06*h-U*.07*h,.42*h,.07*h,0,0,Math.PI*2),d.fill();v=d.createLinearGradient(0,_(.5),0,p),v.addColorStop(0,"rgba(0,0,0,0)"),v.addColorStop(1,"rgba(40,44,50,.12)"),d.fillStyle=v,d.fillRect(0,_(.5),f,.5*h),e!=="bathroom"&&Gc(d,{id:e,W:f,H:p,s:h,X:g,Y:_});let P=[.5,.25,.125,.07],O=m;for(let U of P){let W=document.createElement("canvas");W.width=Math.max(8,Math.round(f*U)),W.height=Math.max(8,Math.round(p*U));let $=W.getContext("2d");$.imageSmoothingQuality="high",$.drawImage(O,0,0,W.width,W.height),O=W}for(let U of[.14,.28,.5]){let W=document.createElement("canvas");W.width=Math.round(f*U),W.height=Math.round(p*U);let $=W.getContext("2d");$.imageSmoothingQuality="high",$.drawImage(O,0,0,W.width,W.height),O=W}r.width=O.width,r.height=O.height,r.getContext("2d").drawImage(O,0,0),s.needsUpdate=!0}return{wall:o,wallTex:s,paint:c,setTheme(l){e=l,c(t,n)}}}function Xc(i,{floorY:e,HALFW:t,attenColor:n}){let r=new yn(1,20,12),s=new xn({color:16777215,roughness:.02,metalness:0,transmission:1,thickness:.12,ior:1.33,clearcoat:1,envMapIntensity:1.5,attenuationColor:n.clone(),attenuationDistance:.35}),o=[];for(let f=0;f<30;f++){let h=new Ve(r,s);h.visible=!1,h.userData={life:0,max:1,r:.05},i.add(h),o.push(h)}let a=0;function c(f,h,p,g=10+Math.random()*8){let _=o[a];a=(a+1)%o.length,_.userData={life:g,max:g,r:p},_.position.set(f,e+p*.28,h),_.visible=!0}function l(f,h,p=1){for(let g=0;g<f;g++){let _=Math.random()*Math.PI*2,m=t*(1.02+Math.random()*.45*p);c(h.x+Math.cos(_)*m,h.z+Math.sin(_)*m*.85,.025+Math.random()*.055)}}function u(f,h){for(let p of o){if(!p.visible)continue;let g=p.userData,_=Math.hypot(p.position.x-h.x,p.position.z-h.z)<t*.9&&h.y<.3;if(g.life-=f*(_?8:1),g.life<=0){p.visible=!1;continue}let m=Math.min(1,g.life/Math.min(2.5,g.max));p.scale.set(g.r*m,g.r*.45*m,g.r*m),p.position.y=e+g.r*.18*m}}return{addDrop:c,splashDrops:l,update:u,dropMat:s}}function qc(i,e,{counter:t,wall:n,paintWall:r,body:s,bounds:o,geometry:a,wallZ:c}){let{HALFW:l,FLOOR:u,TOP:f}=a,h={d:10,target:new N,base:new N,tilt:0},p=new N,g=0,_=0,m=0;function d(){let M=innerWidth,S=innerHeight,R=M/S,b=Math.min(devicePixelRatio||1,2);if(M===g&&S===_&&b===m)return;g=M,_=S,m=b,e.getPixelRatio()!==b&&e.setPixelRatio(b),e.setSize(M,S,!1),t.getRenderTarget().setSize(Math.max(1,Math.round(M*b*.5)),Math.max(1,Math.round(S*b*.5))),i.aspect=R;let w=R<.9;i.fov=w?40:30;let A=Math.tan(Ma.degToRad(i.fov/2)),x=2*l,y=f-u,C=x/((w?.5:.24)*2*A*R),L=y/(.3*2*A),D=Math.max(C,L);h.d=D,h.tilt=Ma.degToRad(w?15:12);let F=2*D*A,B=w?.54:.6,P=(u+f)/2;h.target.set(0,P+(B-.5)*F,0),h.base.set(0,h.target.y+Math.sin(h.tilt)*D,Math.cos(h.tilt)*D),i.position.copy(h.base),i.lookAt(h.target),i.updateProjectionMatrix(),i.updateMatrixWorld();let O=0;for(let re=0;re<8&&(p.set(0,u,re+l).project(i),!(p.y<(w?-.62:-.8)));re+=.05)O=re;o.zMax=O;let U=h.base.z-c,W=2*U*A*R*1.5+8,j=h.base.y+U*(Math.tan(h.tilt)+A)*1.3+2-u;n.scale.set(W,j,1),n.position.set(0,u+j/2,c),r(W,j)}function v(){p.set(0,u+.8,s.z).project(i);let M=p.x;p.set(1,u+.8,s.z).project(i);let S=p.x-M;o.xL=(-.985-M)/S,o.xR=(.985-M)/S,p.set(s.x,f,s.z).project(i);let R=p.y;p.set(s.x,f+1,s.z).project(i);let b=p.y;o.yMax=Je((.72-R)/(b-R),.4,5)}return{view:h,layout:d,updateBounds:v}}function Yc(i,e,t,n){let r="bathroom";function s(o){let a=Fn.find(l=>l.id===o);if(!a)return!1;r=o,i.background.set(a.background);let c=e.material.uniforms;return c.uBase.value.set(a.base),c.uVein.value.set(a.vein),c.uWarm.value.set(a.warm),c.uPattern.value=a.pattern,t.setTheme(o),document.documentElement.dataset.theme=o,document.documentElement.style.setProperty("--bg",a.background),n.update({theme:o}),!0}return{setTheme:s,get current(){return r}}}function Zc({scene:i,camera:e,canvas:t,floor:n,store:r,counter:s,sfx:o,getActors:a,getActive:c}){let l="none",u=[],f=null,h=new Fi,p=new Fe,g=new N,_=new yt(new N(0,1,0),-n-.3),m=new WeakMap;function d(){if(f){try{t.releasePointerCapture(f.id)}catch{}f=null}t.style.cursor=""}function v(){d();let L=new Set;for(let D of u)i.remove(D),D.geometry.dispose(),L.add(D.material);for(let D of L)D.map?.dispose(),D.dispose();u=[]}function M(L,D,F){let B=new Ve(L,D);return B.position.copy(F),B.userData.vx=B.userData.vz=0,u.push(B),i.add(B),B}function S(){if(l!=="bubbles")return;v();let L=new xn({color:"#EDF7F4",roughness:.08,metalness:0,transmission:.55,thickness:.08,iridescence:.65,transparent:!0,opacity:.75,depthWrite:!1}),D=c().world.bounds,F=Math.min(3.4,(D.xR-D.xL)*.7);for(let B=0;B<8;B++){let P=.14+Math.random()*.11,O=M(new yn(P,16,12),L,new N((B/7-.5)*F,n+1+B%3*.6,-.4+B%2*.7));Object.assign(O.userData,{radius:P,baseY:O.position.y,phase:Math.random()*6,born:performance.now()/1e3})}}function R(L){if(!ki.some(P=>P.id===L))return;v(),l=L;let D=c(),F=D.world.bounds,B=Je(D.world.body.x+1.7,F.xL+.6,F.xR-.6);if(L==="bubbles")S();else if(L==="sponge"){let P=document.createElement("canvas");P.width=P.height=128;let O=P.getContext("2d");O.fillStyle="#DCC48C",O.fillRect(0,0,128,128),O.fillStyle="#B9A66E";for(let $=0;$<75;$++)O.beginPath(),O.arc($*37%128,$*61%128,1+$%3,0,Math.PI*2),O.fill();let U=new Dn(P);U.colorSpace=pt,M(new yn(.68,24,16),new Un({map:U,roughness:.9}),new N(B,n+.16,D.world.body.z+.4)).scale.set(1,.25,.72)}else if(L==="ice"){let P=M(new gn(.65,.6,.65),new xn({color:"#D2E8EA",transmission:.75,thickness:.7,roughness:.15,ior:1.31,clearcoat:1}),new N(B,n+.3,D.world.body.z+.55));P.rotation.y=.3}r.update({toy:L})}function b(L){let D=t.getBoundingClientRect();p.set((L.clientX-D.left)/D.width*2-1,-(L.clientY-D.top)/D.height*2+1),h.setFromCamera(p,e)}function w(L,D=c(),F=!1){L.visible&&(L.visible=!1,D.expression.feel("happy",.7),D.world.sqv+=.5,F&&s.bump(),o.poke())}function A(L){if(l==="none"||c().expression.ex.pose||L.pointerType==="mouse"&&L.button!==0)return;b(L);let D=h.intersectObjects(u.filter(B=>B.visible),!1)[0],F=h.intersectObjects(a().map(B=>B.mesh),!1)[0];if(!(!D||F&&F.distance<D.distance)){if(L.stopImmediatePropagation(),o.unlock(),c().expression.touch(performance.now()/1e3,{wakeHop:!1}),l==="bubbles"){w(D.object,c(),!0);return}f={id:L.pointerId,object:D.object,x:L.clientX,y:L.clientY,moved:!1};try{t.setPointerCapture(L.pointerId)}catch{}t.style.cursor="grabbing"}}function x(L){if(!f||f.id!==L.pointerId)return;L.stopImmediatePropagation(),b(L);let D=h.ray.intersectPlane(_,g);if(!D)return;let F=c().world.bounds,B=l==="sponge"?.72:.5;f.object.position.x=Je(D.x,F.xL+B,F.xR-B),f.object.position.z=Je(D.z,F.zMin+.2,F.zMax-.2),f.moved||(f.moved=Math.hypot(L.clientX-f.x,L.clientY-f.y)>6)}function y(L){if(!(!f||f.id!==L.pointerId)){if(L.stopImmediatePropagation(),l==="sponge"&&!f.moved&&L.type!=="pointercancel"){let D=c(),F=D.world.body,B=f.object.position.x-F.x,P=f.object.position.z-F.z;D.expression.touch(performance.now()/1e3,{wakeHop:!1}),D.physics.hop(Ye?3:6.2,Je(B*1.7,-5,5),Je(P*1.7,-5,5))&&(s.bump(),o.jump(),D.expression.feel("happy",1.3))}try{t.releasePointerCapture(L.pointerId)}catch{}f=null,t.style.cursor=""}}t.addEventListener("pointerdown",A),t.addEventListener("pointermove",x),t.addEventListener("pointerup",y),t.addEventListener("pointercancel",y);function C(L,D){for(let F of u){if(!F.visible)continue;l==="bubbles"&&(F.position.y=F.userData.baseY+(Ye?0:Math.sin(D*.8+F.userData.phase)*.22));for(let O of a()){if(O.expression.ex.pose)continue;let U=O.world.body,W=F.position.x-U.x,$=F.position.z-U.z,j=Math.hypot(W,$);if(l==="bubbles"){let re=U.y+(O.geometry.FLOOR+O.geometry.TOP)/2;Math.hypot(W,$,F.position.y-re)<O.geometry.HALFW*.7+F.userData.radius&&w(F,O)}else if(l==="sponge")j<O.geometry.HALFW*.45+.5&&U.air&&U.vy<-.5&&U.y<.32&&D-(m.get(O)??0)>.8&&(U.y=.25,U.vy=Ye?2:5.2,O.world.sqv-=1.4,m.set(O,D),O.expression.feel("happy",.8),o.boing(.25));else if(j<O.geometry.HALFW*.8+.34&&U.y<.8){let re=j>.001?W/j:1,_e=j>.001?$/j:0;f?.object===F?O.physics.push(-re*L*3,-_e*L*3,4):(F.position.x+=re*L*2,F.position.z+=_e*L*2,F.rotation.y+=L*.6),O.expression.ex.surpriseUntil=D+.2}}let B=c().world.bounds,P=l==="sponge"?.72:l==="ice"?.5:F.userData.radius;F.position.x=Je(F.position.x,B.xL+P,B.xR-P),F.position.z=Je(F.position.z,B.zMin+.2,B.zMax-.2)}}return{setKind:R,moreBubbles:S,update:C,cancelDrag:d,get kind(){return l},get objects(){return u},dispose(){v(),t.removeEventListener("pointerdown",A),t.removeEventListener("pointermove",x),t.removeEventListener("pointerup",y),t.removeEventListener("pointercancel",y)}}}function Jc(i,e){let t=e.state.plocs;function n(){ri.textContent=t<1e4?t.toLocaleString():new Intl.NumberFormat(void 0,{notation:"compact",maximumFractionDigits:1}).format(t),ri.title=t.toLocaleString(),ri.setAttribute("aria-label",t.toLocaleString())}n();let r=0;e.subscribe(o=>{t=o.plocs,n()});function s(){t=e.increment(),ri.classList.remove("bump"),ri.offsetWidth,ri.classList.add("bump"),i.dimAfter(++r)}return{bump:s,get value(){return t}}}function $c(i,e){let{touch:t,push:n,hearts:r,slimeScreenTop:s,sfx:o,i18n:a}=e;function c(h){Vi.replaceChildren(),dt.forEach((p,g)=>{let _=document.createElement("button");_.type="button",_.className="flv",_.setAttribute("aria-pressed",g===h?"true":"false");let m=p.id==="aurora"?'<span class="swatch aurora"></span>':`<span class="swatch" style="--c1:${p.body};--c2:${p.atten}"></span>`;_.innerHTML=`${m}<span class="flv-name"></span>`,_.addEventListener("click",()=>f(g)),Vi.appendChild(_)}),l(),a.onChange(l)}function l(){dt.forEach((h,p)=>{let g=Vi.children[p]?.querySelector(".flv-name");g&&(g.textContent=a.pick(h.name))})}function u(h){[...Vi.children].forEach((p,g)=>p.setAttribute("aria-pressed",g===h?"true":"false"))}function f(h,{quiet:p=!1}={}){if(!Number.isInteger(h)||!dt[h])return;let g=performance.now()/1e3;if(p||e.onTap?.(),p||t(g),h===i.index&&!p){n(Math.random()<.5?-2:2,0);return}i.index=h;let _=dt[h];for(let v of Object.keys(i.target))i.target[v].set(_[v]);Object.assign(i.materialTarget,{trans:_.trans,irid:_.irid,rainbow:_.rainbow,rough:_.rough});let m=document.documentElement;if(m.style.setProperty("--accent",_.logo),m.style.setProperty("--accent-deep",_.deep),m.dataset.flavor=_.id,u(h),Vi.children[h]?.scrollIntoView({block:"nearest",inline:"nearest"}),e.onSelect?.(_),p)return;e.sqv+=3,n(Math.random()<.5?-1.5:1.5,0),e.ex.happyUntil=g+1.4;let d=s();r(d.x,d.y+40,4),o.flavor()}return{render:c,setFlavor:f}}function Kc({i18n:i,store:e,themes:t,toys:n,company:r,getActive:s,getActors:o,selectActor:a,photo:c,canvas:l}){let u=document.querySelector("#play-panel"),f=document.querySelector("#play-open"),h=()=>{u.close(),l.focus({preventScroll:!0})},p=[...u.querySelectorAll('[role="tab"]')],g=[...u.querySelectorAll('[role="tabpanel"]')];function _(w){p.forEach((A,x)=>{A.setAttribute("aria-selected",x===w),A.tabIndex=x===w?0:-1,g[x].hidden=x!==w})}p.forEach((w,A)=>{w.addEventListener("click",()=>_(A)),w.addEventListener("keydown",x=>{let y;x.key==="ArrowRight"?y=(A+1)%p.length:x.key==="ArrowLeft"?y=(A+p.length-1)%p.length:x.key==="Home"?y=0:x.key==="End"&&(y=p.length-1),y!==void 0&&(x.preventDefault(),_(y),p[y].focus())})}),f.addEventListener("click",()=>{b(),u.showModal()}),document.querySelector("#play-close").addEventListener("click",h),u.addEventListener("click",w=>{if(w.target===u){let A=u.getBoundingClientRect();(w.clientX<A.left||w.clientX>A.right||w.clientY<A.top||w.clientY>A.bottom)&&h()}});function m(w,A,x){let y=document.createElement("button");return y.type="button",y.className="play-choice",y.dataset.id=w.id,y.dataset.i18n=w.key,y.addEventListener("click",A),x.appendChild(y),y}let d=document.querySelector("#theme-choices");for(let w of Fn){let A=document.createElement("button");A.type="button",A.className="theme-choice",A.dataset.id=w.id;let x=document.createElement("span");x.className="theme-chip",x.setAttribute("aria-hidden","true"),x.style.setProperty("--theme-wall",w.background),x.style.setProperty("--theme-floor",w.base);let y=document.createElement("span");y.className="theme-name",A.append(x,y),d.appendChild(A),A.addEventListener("click",()=>{t.setTheme(w.id),b(),h()})}let v=document.querySelector("#emotion-choices");for(let w of ni)m(w,()=>{s().actions.emote(w.id),h()},v);let M=document.querySelector("#action-choices");for(let w of ds)m(w,()=>{(w.id==="hug"?r.hug():s().actions.run(w.id))?h():w.id==="hug"&&(document.querySelector("#play-message").textContent=i.t("play.hugNeedFriend"))},M);let S=document.querySelector("#toy-choices");for(let w of ki)m(w,()=>{n.setKind(w.id),b(),h()},S);let R=document.querySelector("#play-companion");R.addEventListener("change",()=>{r.setEnabled(R.checked),b()}),document.querySelector("#more-bubbles").addEventListener("click",()=>{n.moreBubbles(),h()}),document.querySelector("#play-pet").addEventListener("click",()=>{s().actions.pet(),h()}),document.querySelector("#photo-open").addEventListener("click",()=>{u.close(),c.open()}),document.querySelector("#target-main").addEventListener("click",()=>{a(o()[0]),b()}),document.querySelector("#target-friend").addEventListener("click",()=>{r.friend&&a(r.friend),b()});function b(){let w=e.state,A=dt.find(L=>L.id===w.flavor),x=ur[hs[w.flavor]];document.querySelector("#personality-note").textContent=`${i.pick(A.name)} \xB7 ${i.t(x.key)}`,d.querySelectorAll("button").forEach((L,D)=>{L.setAttribute("aria-pressed",Fn[D].id===t.current),L.querySelector(".theme-name").textContent=i.pick(Fn[D].name)}),S.querySelectorAll("button").forEach(L=>L.setAttribute("aria-pressed",L.dataset.id===n.kind)),R.checked=r.enabled,document.querySelector("#actor-choices").hidden=!r.enabled,document.querySelector("#target-main").setAttribute("aria-pressed",s()===o()[0]),document.querySelector("#target-friend").setAttribute("aria-pressed",s()===r.friend),document.querySelector("#more-bubbles").hidden=n.kind!=="bubbles",M.querySelector('[data-id="hug"]').disabled=!r.enabled;let y={sponge:"play.spongeHint",bubbles:"play.bubblesHint",ice:"play.iceHint",none:"play.objectsHint"},C=document.querySelector("#toy-help");C.dataset.i18n=y[n.kind],i.apply(u)}return b(),e.subscribe(()=>{u.open&&b()}),i.onChange(b),{open:()=>f.click(),close:h,paint:b}}function jc({renderer:i,scene:e,camera:t,canvas:n,i18n:r,getActors:s,store:o}){let a=document.querySelector("#photo-controls"),c=document.querySelector("#photo-pose"),l=document.querySelector("#photo-take"),u=document.querySelector("#photo-status"),f=document.querySelector("#photo-output"),h=document.querySelector("#photo-preview"),p=document.querySelector("#photo-download"),g=!1,_=!1,m=null;for(let R of ni){let b=document.createElement("option");b.value=R.id,b.dataset.i18n=R.key,c.appendChild(b)}r.apply(a);function d(R){if(ni.some(b=>b.id===R)){c.value=R;for(let b of s())b.grabCtl.release("cancel"),b.expression.ex.pose=R,b.physics.cancelHop(),b.world.body.y=0,b.world.body.air=!1,b.world.body.vx=b.world.body.vy=b.world.body.vz=0,b.world.sq=b.world.sqv=0,b.geometry.disp.fill(0),b.geometry.vel.fill(0),b.physics.writeGeometry(),b.slime.position.set(b.world.body.x,0,b.world.body.z),b.slime.rotation.set(0,0,0),b.face.eye.set(1,R==="happy"||R==="affection"?1:0,0,R==="sleep"?1:0),b.face.surprise.value=R==="surprise"?1:0,b.face.angry.value=R==="angry"?1:0,b.face.affection.value=R==="affection"?1:0,b.face.wink.value=R==="wink"?1:0,b.face.look.set(0,0)}}function v(){g=!0,u.textContent="",f.hidden=!0;let R=s();R.forEach((b,w)=>{b.world.body.x=R.length===1?0:w===0?-.65:1.05,b.world.body.z=0}),document.querySelector("#app").classList.add("photo-mode"),a.hidden=!1,d("happy"),l.focus()}function M(){g=!1;for(let R of s())R.expression.ex.pose="",R.expression.touch(performance.now()/1e3,{wakeHop:!1});document.querySelector("#app").classList.remove("photo-mode"),a.hidden=!0,document.querySelector("#play-open").focus()}async function S(){if(!_){_=!0,l.disabled=!0,u.textContent=r.t("photo.busy");try{i.render(e,t);let R=await new Promise((w,A)=>n.toBlob(x=>x?w(x):A(new Error("Empty photo")),"image/png"));m&&URL.revokeObjectURL(m),m=URL.createObjectURL(R),h.src=m,p.href=m,p.download=`pururu-${o.state.flavor}-${o.state.theme}.png`,f.hidden=!1;let b=document.createElement("a");b.href=m,b.download=p.download,document.body.appendChild(b),b.click(),b.remove(),u.textContent=r.t("photo.done")}catch(R){console.error("[pururu] photo:",R),u.textContent=r.t("photo.error")}finally{_=!1,l.disabled=!1}}}return c.addEventListener("change",()=>d(c.value)),l.addEventListener("click",S),document.querySelector("#photo-exit").addEventListener("click",M),addEventListener("pagehide",()=>{m&&URL.revokeObjectURL(m)}),addEventListener("keydown",R=>{g&&R.key==="Escape"&&M()}),{open:v,close:M,setPose:d,get active(){return g}}}var en={"pt-BR":{"photo.preview":"Sua foto do pururu","photo.download":"Baixar foto","play.target":"Brincar com","play.main":"Pururu","play.friend":"Amigo","play.open":"Brincar","play.title":"O cantinho do pururu","play.close":"Fechar","play.room":"Cantinho","play.games":"Brincadeiras","play.friends":"Companhia","play.themes":"Onde vamos brincar?","play.personality":"Jeitinho do sabor","play.expressions":"Uma carinha","play.actions":"Uma brincadeira","play.objects":"Um objeto","play.objectsHint":"Arraste os objetos ou toque nas bolhas.","play.spongeHint":"Toque na esponja para o pururu pular. Voc\xEA tamb\xE9m pode arrast\xE1-la.","play.bubblesHint":"Toque nas bolhas para estourar. O pururu tamb\xE9m pode peg\xE1-las!","play.iceHint":"Arraste o gelo at\xE9 o pururu e veja ele empurrar.","play.companion":"Um amigo para brincar","play.companionHint":"Os dois podem ser cutucados, arrastados e abra\xE7ados.","play.moreBubbles":"Mais bolhas","play.pet":"Fazer carinho","play.hugNeedFriend":"Ative a companhia para abra\xE7ar.","play.saved":"Seus plocs e escolhas ficam salvos neste navegador.","photo.open":"Modo foto","photo.pose":"Pose","photo.take":"Salvar foto","photo.exit":"Voltar \xE0 brincadeira","photo.busy":"Preparando a foto\u2026","photo.error":"N\xE3o foi poss\xEDvel salvar. Tente novamente.","photo.done":"Foto pronta!","emotion.happy":"Feliz","emotion.angry":"Emburrado","emotion.surprise":"Surpreso","emotion.affection":"Carinhoso","emotion.wink":"Piscadinha","emotion.sleep":"Sonolento","action.jump":"Pular","action.dance":"Dan\xE7ar","action.spin":"Rodopiar","action.sneeze":"Espirrar","action.nap":"Cochilar","action.hug":"Abra\xE7ar","toy.none":"Sem objeto","toy.sponge":"Esponja","toy.bubbles":"Bolhas","toy.ice":"Gelo","personality.curious":"Curioso: vive explorando o cantinho.","personality.affectionate":"Carinhoso: adora receber aten\xE7\xE3o.","personality.calm":"Tranquilo: brinca num ritmo mais suave.","personality.mischievous":"Travesso: faz gra\xE7a e emburra mais f\xE1cil.","personality.dreamy":"Sonhador: prefere brincar devagar e cochilar.","personality.energetic":"El\xE9trico: cheio de energia para pequenos pulos."},en:{"photo.preview":"Your pururu photo","photo.download":"Download photo","play.target":"Play with","play.main":"Pururu","play.friend":"Friend","play.open":"Play","play.title":"Pururu\u2019s little corner","play.close":"Close","play.room":"Room","play.games":"Playtime","play.friends":"Company","play.themes":"Where shall we play?","play.personality":"Flavor personality","play.expressions":"A little face","play.actions":"Something to do","play.objects":"A toy","play.objectsHint":"Drag the toys or tap the bubbles.","play.spongeHint":"Tap the sponge to make pururu hop. You can drag it, too.","play.bubblesHint":"Tap bubbles to pop them. Pururu can catch them, too!","play.iceHint":"Drag the ice towards pururu and watch it push back.","play.companion":"A friend to play with","play.companionHint":"Both friends can be poked, dragged and hugged.","play.moreBubbles":"More bubbles","play.pet":"Give a little pat","play.hugNeedFriend":"Turn on company to give a hug.","play.saved":"Your plocs and choices are saved in this browser.","photo.open":"Photo mode","photo.pose":"Pose","photo.take":"Save photo","photo.exit":"Back to play","photo.busy":"Preparing photo\u2026","photo.error":"Could not save. Please try again.","photo.done":"Photo ready!","emotion.happy":"Happy","emotion.angry":"Grumpy","emotion.surprise":"Surprised","emotion.affection":"Affectionate","emotion.wink":"Wink","emotion.sleep":"Sleepy","action.jump":"Hop","action.dance":"Dance","action.spin":"Spin","action.sneeze":"Sneeze","action.nap":"Nap","action.hug":"Hug","toy.none":"No toy","toy.sponge":"Sponge","toy.bubbles":"Bubbles","toy.ice":"Ice","personality.curious":"Curious: always exploring the room.","personality.affectionate":"Affectionate: loves a little attention.","personality.calm":"Calm: plays at a gentler pace.","personality.mischievous":"Mischievous: playful, but gets grumpy sooner.","personality.dreamy":"Dreamy: likes slow play and little naps.","personality.energetic":"Energetic: always ready for a little hop."},es:{"photo.preview":"Tu foto de pururu","photo.download":"Descargar foto","play.target":"Jugar con","play.main":"Pururu","play.friend":"Amigo","play.open":"Jugar","play.title":"El rinconcito de pururu","play.close":"Cerrar","play.room":"Rinc\xF3n","play.games":"Juegos","play.friends":"Compa\xF1\xEDa","play.themes":"\xBFD\xF3nde jugamos?","play.personality":"Personalidad del sabor","play.expressions":"Una carita","play.actions":"Una actividad","play.objects":"Un objeto","play.objectsHint":"Arrastra los objetos o toca las burbujas.","play.spongeHint":"Toca la esponja para que pururu salte. Tambi\xE9n puedes arrastrarla.","play.bubblesHint":"Toca las burbujas para reventarlas. \xA1Pururu tambi\xE9n puede atraparlas!","play.iceHint":"Arrastra el hielo hasta pururu y mira c\xF3mo lo empuja.","play.companion":"Un amigo para jugar","play.companionHint":"Puedes tocar, arrastrar y abrazar a los dos.","play.moreBubbles":"M\xE1s burbujas","play.pet":"Acariciar","play.hugNeedFriend":"Activa la compa\xF1\xEDa para dar un abrazo.","play.saved":"Tus plocs y preferencias se guardan en este navegador.","photo.open":"Modo foto","photo.pose":"Pose","photo.take":"Guardar foto","photo.exit":"Volver al juego","photo.busy":"Preparando la foto\u2026","photo.error":"No se pudo guardar. Int\xE9ntalo de nuevo.","photo.done":"\xA1Foto lista!","emotion.happy":"Feliz","emotion.angry":"Gru\xF1\xF3n","emotion.surprise":"Sorprendido","emotion.affection":"Cari\xF1oso","emotion.wink":"Gui\xF1o","emotion.sleep":"So\xF1oliento","action.jump":"Saltar","action.dance":"Bailar","action.spin":"Girar","action.sneeze":"Estornudar","action.nap":"Dormitar","action.hug":"Abrazar","toy.none":"Sin objeto","toy.sponge":"Esponja","toy.bubbles":"Burbujas","toy.ice":"Hielo","personality.curious":"Curioso: siempre explora su rinc\xF3n.","personality.affectionate":"Cari\xF1oso: le encanta recibir atenci\xF3n.","personality.calm":"Tranquilo: juega a un ritmo suave.","personality.mischievous":"Travieso: hace bromas y se enfada antes.","personality.dreamy":"So\xF1ador: prefiere jugar despacio y dormitar.","personality.energetic":"En\xE9rgico: siempre listo para un saltito."},ja:{"photo.preview":"\u3077\u308B\u308B\u306E\u5199\u771F","photo.download":"\u5199\u771F\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9","play.target":"\u3044\u3063\u3057\u3087\u306B\u3042\u305D\u3076\u76F8\u624B","play.main":"\u3077\u308B\u308B","play.friend":"\u3068\u3082\u3060\u3061","play.open":"\u3042\u305D\u3076","play.title":"\u3077\u308B\u308B\u306E\u5C0F\u3055\u306A\u304A\u90E8\u5C4B","play.close":"\u9589\u3058\u308B","play.room":"\u304A\u90E8\u5C4B","play.games":"\u3042\u305D\u3073","play.friends":"\u3068\u3082\u3060\u3061","play.themes":"\u3069\u3053\u3067\u3042\u305D\u3076\uFF1F","play.personality":"\u30D5\u30EC\u30FC\u30D0\u30FC\u306E\u6027\u683C","play.expressions":"\u304A\u304B\u304A","play.actions":"\u3057\u3050\u3055","play.objects":"\u304A\u3082\u3061\u3083","play.objectsHint":"\u304A\u3082\u3061\u3083\u3092\u30C9\u30E9\u30C3\u30B0\u3001\u6CE1\u3092\u30BF\u30C3\u30D7\u3002","play.spongeHint":"\u30B9\u30DD\u30F3\u30B8\u3092\u30BF\u30C3\u30D7\u3059\u308B\u3068\u30B8\u30E3\u30F3\u30D7\u3002\u30C9\u30E9\u30C3\u30B0\u3082\u3067\u304D\u307E\u3059\u3002","play.bubblesHint":"\u6CE1\u3092\u30BF\u30C3\u30D7\u3057\u3066\u5272\u308D\u3046\u3002\u3077\u308B\u308B\u3082\u3064\u304B\u307E\u3048\u307E\u3059\uFF01","play.iceHint":"\u6C37\u3092\u3077\u308B\u308B\u306E\u305D\u3070\u3078\u52D5\u304B\u3059\u3068\u62BC\u3057\u3066\u304F\u308C\u307E\u3059\u3002","play.companion":"\u3044\u3063\u3057\u3087\u306B\u3042\u305D\u3076\u3068\u3082\u3060\u3061","play.companionHint":"\u3075\u305F\u308A\u3068\u3082\u3001\u3064\u3064\u3044\u305F\u308A\u3001\u30C9\u30E9\u30C3\u30B0\u3057\u305F\u308A\u3001\u30CF\u30B0\u3067\u304D\u307E\u3059\u3002","play.moreBubbles":"\u6CE1\u3092\u3075\u3084\u3059","play.pet":"\u306A\u3067\u308B","play.hugNeedFriend":"\u3068\u3082\u3060\u3061\u3092\u547C\u3076\u3068\u30CF\u30B0\u3067\u304D\u307E\u3059\u3002","play.saved":"\u3077\u308B\u3093\u306E\u56DE\u6570\u3068\u8A2D\u5B9A\u306F\u3053\u306E\u30D6\u30E9\u30A6\u30B6\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002","photo.open":"\u5199\u771F\u30E2\u30FC\u30C9","photo.pose":"\u30DD\u30FC\u30BA","photo.take":"\u5199\u771F\u3092\u4FDD\u5B58","photo.exit":"\u3042\u305D\u3073\u306B\u3082\u3069\u308B","photo.busy":"\u5199\u771F\u3092\u6E96\u5099\u4E2D\u2026","photo.error":"\u4FDD\u5B58\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u3082\u3046\u4E00\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002","photo.done":"\u5199\u771F\u304C\u3067\u304D\u307E\u3057\u305F\uFF01","emotion.happy":"\u306B\u3063\u3053\u308A","emotion.angry":"\u3080\u3059\u3063","emotion.surprise":"\u3073\u3063\u304F\u308A","emotion.affection":"\u3060\u3044\u3059\u304D","emotion.wink":"\u30A6\u30A4\u30F3\u30AF","emotion.sleep":"\u306D\u3080\u306D\u3080","action.jump":"\u30B8\u30E3\u30F3\u30D7","action.dance":"\u30C0\u30F3\u30B9","action.spin":"\u304F\u308B\u308A","action.sneeze":"\u304F\u3057\u3083\u307F","action.nap":"\u304A\u3072\u308B\u306D","action.hug":"\u30CF\u30B0","toy.none":"\u306A\u3057","toy.sponge":"\u30B9\u30DD\u30F3\u30B8","toy.bubbles":"\u6CE1","toy.ice":"\u6C37","personality.curious":"\u597D\u5947\u5FC3\u3044\u3063\u3071\u3044\u3002\u304A\u90E8\u5C4B\u3092\u63A2\u691C\u3059\u308B\u306E\u304C\u3059\u304D\u3002","personality.affectionate":"\u3042\u307E\u3048\u3093\u307C\u3002\u304B\u307E\u3063\u3066\u3082\u3089\u3046\u306E\u304C\u3060\u3044\u3059\u304D\u3002","personality.calm":"\u304A\u3060\u3084\u304B\u3002\u3086\u3063\u304F\u308A\u3042\u305D\u3073\u307E\u3059\u3002","personality.mischievous":"\u3044\u305F\u305A\u3089\u3063\u3053\u3002\u3061\u3087\u3063\u3074\u308A\u3059\u306D\u3084\u3059\u3044\u3002","personality.dreamy":"\u306E\u3093\u3073\u308A\u3002\u304A\u3072\u308B\u306D\u304C\u3059\u304D\u3002","personality.energetic":"\u5143\u6C17\u3044\u3063\u3071\u3044\u3002\u5C0F\u3055\u306A\u30B8\u30E3\u30F3\u30D7\u304C\u3060\u3044\u3059\u304D\u3002"},zh:{"photo.preview":"\u4F60\u7684pururu\u7167\u7247","photo.download":"\u4E0B\u8F7D\u7167\u7247","play.target":"\u4E00\u8D77\u73A9\u7684\u4F19\u4F34","play.main":"Pururu","play.friend":"\u670B\u53CB","play.open":"\u73A9\u800D","play.title":"pururu\u7684\u5C0F\u5929\u5730","play.close":"\u5173\u95ED","play.room":"\u5C0F\u5929\u5730","play.games":"\u6E38\u620F","play.friends":"\u4F19\u4F34","play.themes":"\u53BB\u54EA\u91CC\u73A9\uFF1F","play.personality":"\u53E3\u5473\u7684\u6027\u683C","play.expressions":"\u5C0F\u8868\u60C5","play.actions":"\u5C0F\u52A8\u4F5C","play.objects":"\u73A9\u5177","play.objectsHint":"\u62D6\u52A8\u73A9\u5177\u6216\u8F7B\u70B9\u6CE1\u6CE1\u3002","play.spongeHint":"\u8F7B\u70B9\u6D77\u7EF5\u8BA9pururu\u8DF3\u8D77\u6765\uFF0C\u4E5F\u53EF\u4EE5\u62D6\u52A8\u6D77\u7EF5\u3002","play.bubblesHint":"\u8F7B\u70B9\u6CE1\u6CE1\u628A\u5B83\u6233\u7834\uFF0Cpururu\u4E5F\u4F1A\u6293\u6CE1\u6CE1\uFF01","play.iceHint":"\u628A\u51B0\u5757\u62D6\u5230pururu\u65C1\u8FB9\uFF0C\u770B\u5B83\u628A\u51B0\u5757\u63A8\u5F00\u3002","play.companion":"\u4E00\u8D77\u73A9\u7684\u670B\u53CB","play.companionHint":"\u4E24\u4E2A\u4F19\u4F34\u90FD\u53EF\u4EE5\u8F7B\u6233\u3001\u62D6\u52A8\u548C\u62E5\u62B1\u3002","play.moreBubbles":"\u66F4\u591A\u6CE1\u6CE1","play.pet":"\u6478\u6478\u5B83","play.hugNeedFriend":"\u5F00\u542F\u4F19\u4F34\u540E\u5C31\u80FD\u62E5\u62B1\u3002","play.saved":"\u6B21\u6570\u548C\u504F\u597D\u4F1A\u4FDD\u5B58\u5728\u6B64\u6D4F\u89C8\u5668\u4E2D\u3002","photo.open":"\u62CD\u7167\u6A21\u5F0F","photo.pose":"\u59FF\u52BF","photo.take":"\u4FDD\u5B58\u7167\u7247","photo.exit":"\u8FD4\u56DE\u73A9\u800D","photo.busy":"\u6B63\u5728\u51C6\u5907\u7167\u7247\u2026","photo.error":"\u65E0\u6CD5\u4FDD\u5B58\uFF0C\u8BF7\u91CD\u8BD5\u3002","photo.done":"\u7167\u7247\u5DF2\u51C6\u5907\u597D\uFF01","emotion.happy":"\u5F00\u5FC3","emotion.angry":"\u95F9\u522B\u626D","emotion.surprise":"\u60CA\u8BB6","emotion.affection":"\u4EB2\u6635","emotion.wink":"\u7728\u773C","emotion.sleep":"\u56F0\u56F0","action.jump":"\u8DF3\u8DC3","action.dance":"\u8DF3\u821E","action.spin":"\u8F6C\u5708","action.sneeze":"\u6253\u55B7\u568F","action.nap":"\u5C0F\u7761","action.hug":"\u62E5\u62B1","toy.none":"\u6CA1\u6709\u73A9\u5177","toy.sponge":"\u6D77\u7EF5","toy.bubbles":"\u6CE1\u6CE1","toy.ice":"\u51B0\u5757","personality.curious":"\u597D\u5947\uFF1A\u559C\u6B22\u63A2\u7D22\u5C0F\u5929\u5730\u3002","personality.affectionate":"\u4EB2\u6635\uFF1A\u559C\u6B22\u88AB\u5173\u6CE8\u3002","personality.calm":"\u5E73\u9759\uFF1A\u559C\u6B22\u6162\u6162\u73A9\u3002","personality.mischievous":"\u8C03\u76AE\uFF1A\u7231\u9017\u8DA3\uFF0C\u4E5F\u5BB9\u6613\u95F9\u522B\u626D\u3002","personality.dreamy":"\u7231\u505A\u68A6\uFF1A\u559C\u6B22\u6162\u6162\u73A9\u548C\u5C0F\u7761\u3002","personality.energetic":"\u6D3B\u529B\u5341\u8DB3\uFF1A\u968F\u65F6\u51C6\u5907\u8DF3\u4E00\u8DF3\u3002"}};var gs={...en.ja,"meta.title":"pururu \u2014 \u3055\u308F\u3063\u3066\u3001\u3077\u308B\u3093\u3002","meta.description":"\u3064\u307E\u3093\u3067\u3001\u306A\u3052\u3066\u3001\u3064\u3064\u3044\u3066\u3042\u305D\u3079\u308B\u3001\u30BC\u30EA\u30FC\u306E\u3068\u3082\u3060\u3061\u300C\u3077\u308B\u308B\u300D\u306E\u30D5\u30A1\u30FC\u30B9\u30C8\u30D3\u30E5\u30FC\u3002","og.title":"pururu \u2014 \u3055\u308F\u3063\u3066\u3001\u3077\u308B\u3093\u3002","og.description":"\u3064\u307E\u3093\u3067\u3001\u306A\u3052\u3066\u3001\u3064\u3064\u3044\u3066\u3002\u5927\u7406\u77F3\u306E\u6D17\u9762\u53F0\u306E\u4E0A\u3067\u3001\u900F\u660E\u306A\u30BC\u30EA\u30FC\u306E\u30B9\u30E9\u30A4\u30E0\u300C\u3077\u308B\u308B\u300D\u3068\u904A\u3079\u307E\u3059\u3002","og.imageAlt":"\u767D\u3044\u5927\u7406\u77F3\u306E\u6D17\u9762\u53F0\u306B\u306E\u3063\u305F\u3001\u9ED2\u3044\u76EE\u306E\u900F\u660E\u306A\u6C34\u8272\u30B9\u30E9\u30A4\u30E0","brand.kana":"\u3077\u308B\u308B","a11y.language":"\u8A00\u8A9E\u3092\u9078\u3076","a11y.counter":"\u3077\u308B\u3093\u3068\u3057\u305F\u56DE\u6570","a11y.sound":"\u30B5\u30A6\u30F3\u30C9","a11y.flavors":"\u30D5\u30EC\u30FC\u30D0\u30FC\u3092\u9078\u3076","a11y.canvas":"\u30BC\u30EA\u30FC\u306E\u3068\u3082\u3060\u3061\u300C\u3077\u308B\u308B\u300D\u3002\u30C9\u30E9\u30C3\u30B0\u3067\u904B\u3076\u30FB\u6295\u3052\u308B\u3001\u30AF\u30EA\u30C3\u30AF\u3067\u3064\u3064\u304F\u3001\u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF\u3067\u30B8\u30E3\u30F3\u30D7\u3002\u30AD\u30FC\u30DC\u30FC\u30C9\u306F\u77E2\u5370\u30AD\u30FC\u3067\u62BC\u3059\u3001Enter\u3067\u3064\u3064\u304F\u3001\u30B9\u30DA\u30FC\u30B9\u3067\u30B8\u30E3\u30F3\u30D7\u3002","sound.label":"\u30B5\u30A6\u30F3\u30C9","sound.on":"on","sound.off":"off","counter.label":"\u3077\u308B\u3093","counter.title":"\u3077\u308B\u3093\u3068\u3057\u305F\u56DE\u6570","hint.drag":"\u30C9\u30E9\u30C3\u30B0","hint.dragDo":"\u904B\u3076\u30FB\u6295\u3052\u308B","hint.tap":"\u30AF\u30EA\u30C3\u30AF","hint.tapDo":"\u3064\u3064\u304F","hint.pinch":"2\u672C\u6307","hint.pinchDo":"\u62BC\u3059\u30FB\u30D4\u30F3\u30C1","hint.touch.tap":"\u30BF\u30C3\u30D7","hint.touch.pinch":"\u30D4\u30F3\u30C1","hint.touch.pinchDo":"\u306E\u3073\u308B","copy.eyebrow":"Tiny jelly friend \u2014 No.01","copy.h1Lead":"\u3055\u308F\u3063\u3066\u3001","copy.h1Accent":"\u3077\u308B\u3093\u3002","copy.line1":"\u3064\u307E\u3093\u3067\u3001\u306A\u3052\u3066\u3001\u3064\u3064\u3044\u3066\u3002","copy.line2":"\u3077\u308B\u308B\u306F\u3001\u3042\u306A\u305F\u306E\u6307\u5148\u304C","copy.line3":"\u3060\u3044\u3059\u304D\u306A\u30BC\u30EA\u30FC\u306E\u3068\u3082\u3060\u3061\u3067\u3059\u3002","flavors.label":"Flavor","flavors.aria":"\u30D5\u30EC\u30FC\u30D0\u30FC\u3092\u9078\u3076","nogl.line1":"\u3053\u306E\u7AEF\u672B\u3067\u306F\u3077\u308B\u308B\u3092\u8868\u793A\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002","nogl.line2":"WebGL\u306B\u5BFE\u5FDC\u3057\u305F\u30D6\u30E9\u30A6\u30B6\u3067\u3072\u3089\u3044\u3066\u304F\u3060\u3055\u3044\u3002"};var Qc={...en["pt-BR"],"meta.title":"pururu \u2014 Toque, e fa\xE7a ploc.","meta.description":"Pegue, arremesse e cutuque a geleia \xABpururu\xBB neste primeiro contacto.","og.title":"pururu \u2014 Toque, e fa\xE7a ploc.","og.description":"Pegue, arremesse e cutuque. Brinque com a geleia transparente \xABpururu\xBB em cima de uma pia de m\xE1rmore.","og.imageAlt":"Uma geleia azul-claro transparente, de olhos pretos, sobre uma pia de m\xE1rmore branco","brand.kana":"\u3077\u308B\u308B","a11y.language":"Escolher o idioma","a11y.counter":"N\xFAmero de plocs","a11y.sound":"Som","a11y.flavors":"Escolher o sabor","a11y.canvas":"Uma geleia chamada pururu. Arraste para mover e arremessar, clique para cutucar, clique duas vezes para pular. No teclado: setas para empurrar, Enter para cutucar, Espa\xE7o para pular.","sound.label":"Som","sound.on":"on","sound.off":"off","counter.label":"Ploc","counter.title":"N\xFAmero de plocs","hint.drag":"Arraste","hint.dragDo":"Mover e arremessar","hint.tap":"Clique","hint.tapDo":"Cutucar","hint.pinch":"Dois dedos","hint.pinchDo":"Pressionar e espichar","hint.touch.tap":"Toque","hint.touch.pinch":"Beliscar","hint.touch.pinchDo":"Esticar","copy.eyebrow":"Pequeno amigo de geleia \u2014 N\xBA 01","copy.h1Lead":"Toque nele,","copy.h1Accent":"e fa\xE7a ploc.","copy.line1":"Pegue, jogue, cutuque.","copy.line2":"Um bichinho de geleia que","copy.line3":"ama o toque dos seus dedos.","flavors.label":"Sabor","flavors.aria":"Escolher o sabor","nogl.line1":"N\xE3o conseguimos mostrar o pururu neste aparelho.","nogl.line2":"Abra num navegador compat\xEDvel com WebGL."};var eu={...en.en,"meta.title":"pururu \u2014 Touch it, watch it wobble.","meta.description":"Grab, throw and poke the jelly friend pururu in this first encounter.","og.title":"pururu \u2014 Touch it, watch it wobble.","og.description":"Grab, throw and poke. Play with the transparent jelly \xABpururu\xBB on a marble bathroom counter.","og.imageAlt":"A transparent pale-blue jelly with black eyes, sitting on a white marble counter","brand.kana":"\u3077\u308B\u308B","a11y.language":"Choose a language","a11y.counter":"How many times it has wobbled","a11y.sound":"Sound","a11y.flavors":"Choose a flavor","a11y.canvas":"A jelly friend called pururu. Drag to move and throw it, click to poke, double-click to jump. With the keyboard: arrow keys to nudge, Enter to poke, Space to jump.","sound.label":"Sound","sound.on":"on","sound.off":"off","counter.label":"Wobbles","counter.title":"How many times it has wobbled","hint.drag":"Drag","hint.dragDo":"Move & throw","hint.tap":"Click","hint.tapDo":"Poke","hint.pinch":"Two fingers","hint.pinchDo":"Press & pinch","hint.touch.tap":"Tap","hint.touch.pinch":"Pinch","hint.touch.pinchDo":"Stretch","copy.eyebrow":"Tiny jelly friend \u2014 No.01","copy.h1Lead":"Touch it,","copy.h1Accent":"watch it wobble.","copy.line1":"Grab it, throw it, poke it.","copy.line2":"A tiny jelly friend who","copy.line3":"loves the feel of your fingers.","flavors.label":"Flavor","flavors.aria":"Choose a flavor","nogl.line1":"We could not show pururu on this device.","nogl.line2":"Please open it in a WebGL-capable browser."};var tu={...en.es,"meta.title":"pururu \u2014 T\xF3calo y haz plof.","meta.description":"Agarra, lanza y pincha a tu amigo de gel pururu en este primer encuentro.","og.title":"pururu \u2014 T\xF3calo y haz plof.","og.description":"Agarra, lanza y pincha. Juega con el gel transparente \xABpururu\xBB sobre un lavabo de m\xE1rmol.","og.imageAlt":"Un gel azul claro transparente, con ojos negros, sobre un lavabo de m\xE1rmol blanco","brand.kana":"\u3077\u308B\u308B","a11y.language":"Elige un idioma","a11y.counter":"Veces que ha hecho plof","a11y.sound":"Sonido","a11y.flavors":"Elige un sabor","a11y.canvas":"Un amigo de gel llamado pururu. Arrastra para moverlo y lanzarlo, haz clic para pinchar, doble clic para saltar. Con el teclado: flechas para empujar, Enter para pinchar, Espacio para saltar.","sound.label":"Sonido","sound.on":"on","sound.off":"off","counter.label":"Plofs","counter.title":"Veces que ha hecho plof","hint.drag":"Arrastra","hint.dragDo":"Mover y lanzar","hint.tap":"Clic","hint.tapDo":"Pinchar","hint.pinch":"Dos dedos","hint.pinchDo":"Presionar y pellizcar","hint.touch.tap":"Toca","hint.touch.pinch":"Pellizca","hint.touch.pinchDo":"Estira","copy.eyebrow":"Peque\xF1o amigo de gel \u2014 N.\xBA 01","copy.h1Lead":"T\xF3calo,","copy.h1Accent":"y haz plof.","copy.line1":"Ag\xE1rralo, l\xE1nzalo, pinchalo.","copy.line2":"Un peque\xF1o amigo de gel que","copy.line3":"adora la caricia de tus dedos.","flavors.label":"Sabor","flavors.aria":"Elige un sabor","nogl.line1":"No pudimos mostrar a pururu en este dispositivo.","nogl.line2":"\xC1brelo en un navegador compatible con WebGL."};var nu={...en.zh,"meta.title":"pururu \u2014 \u6233\u4E00\u6233\uFF0C\u5575\u565C\u5575\u565C\u3002","meta.description":"\u53EF\u4EE5\u6293\u3001\u53EF\u4EE5\u6254\u3001\u53EF\u4EE5\u6233\uFF0C\u4E00\u8D77\u8BA4\u8BC6\u679C\u51BB\u670B\u53CB\u300C\u3077\u308B\u308B\u300D\u3002","og.title":"pururu \u2014 \u6233\u4E00\u6233\uFF0C\u5575\u565C\u5575\u565C\u3002","og.description":"\u53EF\u4EE5\u6293\u3001\u53EF\u4EE5\u6254\u3001\u53EF\u4EE5\u6233\u3002\u5728\u5927\u7406\u77F3\u6D17\u624B\u53F0\u4E0A\uFF0C\u548C\u900F\u660E\u7684\u679C\u51BB\u300C\u3077\u308B\u308B\u300D\u4E00\u8D77\u73A9\u5427\u3002","og.imageAlt":"\u767D\u8272\u5927\u7406\u77F3\u53F0\u9762\u4E0A\uFF0C\u4E00\u53EA\u9ED1\u8272\u773C\u775B\u7684\u900F\u660E\u6D45\u84DD\u8272\u679C\u51BB","brand.kana":"\u3077\u308B\u308B","a11y.language":"\u9009\u62E9\u8BED\u8A00","a11y.counter":"\u5575\u565C\u7684\u6B21\u6570","a11y.sound":"\u58F0\u97F3","a11y.flavors":"\u9009\u62E9\u53E3\u5473","a11y.canvas":"\u4E00\u53EA\u53EB\u300C\u3077\u308B\u308B\u300D\u7684\u679C\u51BB\u670B\u53CB\u3002\u62D6\u52A8\u53EF\u4EE5\u79FB\u52A8\u548C\u6295\u63B7\uFF0C\u70B9\u51FB\u53EF\u4EE5\u6233\u4E00\u6233\uFF0C\u53CC\u51FB\u53EF\u4EE5\u8DF3\u8D77\u6765\u3002\u952E\u76D8\uFF1A\u65B9\u5411\u952E\u63A8\u52A8\uFF0C\u56DE\u8F66\u952E\u6233\u4E00\u6233\uFF0C\u7A7A\u683C\u952E\u8DF3\u8DC3\u3002","sound.label":"\u58F0\u97F3","sound.on":"\u5F00","sound.off":"\u5173","counter.label":"\u5575\u565C","counter.title":"\u5575\u565C\u7684\u6B21\u6570","hint.drag":"\u62D6\u52A8","hint.dragDo":"\u79FB\u52A8\u548C\u6295\u63B7","hint.tap":"\u70B9\u51FB","hint.tapDo":"\u6233\u4E00\u6233","hint.pinch":"\u53CC\u6307","hint.pinchDo":"\u6309\u538B\u548C\u634F\u5408","hint.touch.tap":"\u8F7B\u89E6","hint.touch.pinch":"\u634F\u5408","hint.touch.pinchDo":"\u62C9\u4F38","copy.eyebrow":"\u5C0F\u5C0F\u679C\u51BB\u670B\u53CB \u2014 \u7B2C 01 \u53F7","copy.h1Lead":"\u6233\u4E00\u6233\uFF0C","copy.h1Accent":"\u5575\u565C\u5575\u565C\u3002","copy.line1":"\u6293\u8D77\u5B83\uFF0C\u6254\u51FA\u53BB\uFF0C\u6233\u4E00\u6233\u3002","copy.line2":"\u5B83\u662F\u4E00\u53EA\u5C0F\u5C0F\u7684\u679C\u51BB\u670B\u53CB\uFF0C","copy.line3":"\u6700\u559C\u6B22\u4F60\u7684\u6307\u5C16\u3002","flavors.label":"\u53E3\u5473","flavors.aria":"\u9009\u62E9\u53E3\u5473","nogl.line1":"\u65E0\u6CD5\u5728\u6B64\u8BBE\u5907\u4E0A\u663E\u793A\u3077\u308B\u308B\u3002","nogl.line2":"\u8BF7\u4F7F\u7528\u652F\u6301 WebGL \u7684\u6D4F\u89C8\u5668\u6253\u5F00\u3002"};var ru="pururu-lang",Xi=[{code:"ja",label:"\u65E5\u672C\u8A9E",short:"JA",dict:gs},{code:"pt-BR",label:"Portugu\xEAs (Brasil)",short:"PT",dict:Qc},{code:"en",label:"English",short:"EN",dict:eu},{code:"es",label:"Espa\xF1ol",short:"ES",dict:tu},{code:"zh",label:"\u4E2D\u6587",short:"\u4E2D\u6587",dict:nu}],ys=new Map(Xi.map(i=>[i.code,i.dict])),su="ja";function iu(){try{return localStorage.getItem(ru)}catch{return null}}function Ag(i){try{localStorage.setItem(ru,i)}catch{}}function Cg(i=navigator.languages??[navigator.language??""]){for(let e of i.filter(Boolean)){if(ys.has(e))return e;let t=Xi.find(s=>s.code.toLowerCase()===e.toLowerCase());if(t)return t.code;let n=e.split("-")[0].toLowerCase();if(n==="pt")return"pt-BR";let r=Xi.find(s=>s.code.split("-")[0].toLowerCase()===n);if(r)return r.code}return su}function ou(){let i=new Set,e=ys.has(iu())?iu():Cg();function t(o){return(ys.get(e)??gs)[o]??gs[o]??o}function n(o){return o?typeof o=="string"?o:o[e]??o[su]??Object.values(o)[0]??"":""}function r(o=document){for(let u of o.querySelectorAll("[data-i18n]"))u.textContent=t(u.dataset.i18n);for(let u of o.querySelectorAll("[data-i18n-attr]"))for(let f of u.dataset.i18nAttr.split(",")){let[h,p]=f.split(":").map(g=>g.trim());h&&p&&u.setAttribute(h,t(p))}let a=(u,f)=>{let h=document.head.querySelector(u);h&&h.setAttribute("content",t(f))},c=document.head.querySelector("title");c&&(c.textContent=t("meta.title")),a('meta[name="description"]',"meta.description"),a('meta[property="og:title"]',"og.title"),a('meta[property="og:description"]',"og.description"),a('meta[property="og:image:alt"]',"og.imageAlt"),a('meta[property="og:locale"]',"og.locale");let l=document.documentElement;l.lang=e,l.dataset.lang=e}function s(o){if(!ys.has(o)||o===e)return!1;e=o,Ag(o),r();for(let a of i)a(o,t);return!0}return{t,pick:n,apply:r,set:s,get:()=>e,onChange:o=>(i.add(o),()=>i.delete(o))}}function au(i){let e=document.querySelector("#lang");if(!e)return{set(){}};for(let{code:n,label:r}of Xi){let s=document.createElement("option");s.value=n,s.textContent=r,e.appendChild(s)}let t=()=>{let n=Xi.find(r=>r.code===i.get());n&&(e.value=n.code)};return e.addEventListener("change",()=>i.set(e.value)),t(),i.onChange(t),{select:e,set:t}}var Rg=[["drag",()=>"hint.drag"],["dragDo",()=>"hint.dragDo"],["tap",i=>i?"hint.touch.tap":"hint.tap"],["tapDo",()=>"hint.tapDo"],["pinch",i=>i?"hint.touch.pinch":"hint.pinch"],["pinchDo",i=>i?"hint.touch.pinchDo":"hint.pinchDo"]];function lu(i){let e=document.querySelector("#hint");function t(){for(let[n,r]of Rg){let s=document.querySelector(`[data-hint="${n}"]`);s&&(s.textContent=i.t(r(ii)))}}return t(),i.onChange(t),{apply:t,element:e,dimAfter(n){n===3&&e.classList.add("dim")}}}var fr=(()=>{let i=null,e=null,t=!1;try{t=localStorage.getItem("pururu-sound")==="on"}catch{}let n=Sc,r=()=>{n.setAttribute("aria-pressed",t?"true":"false");let c=n.querySelector(".state");c.dataset.i18n=t?"sound.on":"sound.off",c.textContent=t?"on":"off"};r();function s(){if(!i){let c=window.AudioContext||window.webkitAudioContext;if(!c)return null;i=new c,e=i.createGain(),e.gain.value=.55;let l=i.createDynamicsCompressor();e.connect(l),l.connect(i.destination)}return i.state==="suspended"&&i.resume(),i}function o({f0:c,f1:l,f2:u=null,dur:f=.4,type:h="sine",vol:p=.2,vib:g=0,vibRate:_=14,delay:m=0}){if(!t||!s())return;let d=i.currentTime+m,v=i.createOscillator(),M=i.createGain();if(v.type=h,v.frequency.setValueAtTime(c,d),u?(v.frequency.exponentialRampToValueAtTime(l,d+f*.12),v.frequency.exponentialRampToValueAtTime(u,d+f)):v.frequency.exponentialRampToValueAtTime(l,d+f),g){let S=i.createOscillator(),R=i.createGain();S.frequency.value=_,R.gain.setValueAtTime(g,d),R.gain.exponentialRampToValueAtTime(.01,d+f),S.connect(R),R.connect(v.frequency),S.start(d),S.stop(d+f+.05)}M.gain.setValueAtTime(1e-4,d),M.gain.exponentialRampToValueAtTime(p,d+.008),M.gain.exponentialRampToValueAtTime(1e-4,d+f),v.connect(M),M.connect(e),v.start(d),v.stop(d+f+.05)}n.addEventListener("click",()=>{t=!t,r();try{localStorage.setItem("pururu-sound",t?"on":"off")}catch{}t&&(s(),a.poke())});let a={unlock(){t&&s()},poke(){let c=.9+Math.random()*.25;o({f0:420*c,f1:900*c,dur:.09,type:"triangle",vol:.16}),o({f0:900*c,f1:520*c,dur:.12,type:"sine",vol:.08,delay:.05})},boing(c=.6){let l=150+60*(1-c);o({f0:l,f1:l*2.6,f2:l*.8,dur:.45+c*.35,type:"sine",vol:.26,vib:40+60*c,vibRate:13}),o({f0:l*2,f1:l*4.8,f2:l*1.5,dur:.3,type:"triangle",vol:.05,vib:60,vibRate:13})},land(c=5){let l=Math.min(1,c/9);o({f0:200,f1:70,dur:.18,type:"sine",vol:.25*l+.04}),o({f0:170,f1:380,f2:140,dur:.35+.2*l,type:"sine",vol:.14*l,vib:40,vibRate:15,delay:.02})},jump(){o({f0:260,f1:820,dur:.22,type:"sine",vol:.2})},wobble(){o({f0:210,f1:300,f2:190,dur:.35,type:"sine",vol:.14,vib:50,vibRate:11})},stretch(c){o({f0:180+200*c,f1:260+320*c,dur:.12,type:"sine",vol:.05})},wake(){o({f0:500,f1:1100,dur:.12,type:"triangle",vol:.12})},flavor(){[523,659,784].forEach((c,l)=>o({f0:c,f1:c*1.01,dur:.22,type:"triangle",vol:.08,delay:l*.06}))}};return a})();function cu(){let i=ou();i.apply(),au(i);let e=bc(),t=e.state,n=lu(i),r=Jc(n,e),s;try{s=xc(Yt)}catch(G){Ec.classList.add("show"),console.error(G);return}let{renderer:o,scene:a,camera:c,DPR:l}=s,u=new Map,f,h,p,g,_,m=0,d=0,v=[],M=()=>v,S={canvas:Yt,counter:r,sfx:fr,coarse:ii,touches:u,splash:(G,te,ee)=>g?.splashDrops(G,te,ee),isFriendActive:G=>f===G&&!_?.active};h=ms(a,c,{...S,isActive:()=>f===h&&!_?.active}),v.push(h),f=h;let{geometry:R,world:b,palette:w}=h,A=Vc(a,{floorY:R.FLOOR,DPR:l,wallZ:hr,getFrameNo:()=>m});A.oncePerFrame();let x=Wc(a);g=Xc(a,{floorY:R.FLOOR,HALFW:R.HALFW,attenColor:w.current.atten});let y=qc(c,o,{counter:A.counter,wall:x.wall,paintWall:x.paint,wallZ:hr,body:b.body,bounds:b.bounds,geometry:R});y.layout(),y.updateBounds();let C=Yc(a,A.counter,x,e);function L(G){f!==G&&(f?.grabCtl.release("cancel"),f&&(f.raycast.pointer.has=!1),f=G)}let D=$c(w,{i18n:i,sfx:fr,touch:h.expression.touch,push:h.physics.push,hearts:h.fx.hearts,slimeScreenTop:h.fx.slimeScreenTop,onTap:()=>L(h),get sqv(){return b.sqv},set sqv(G){b.sqv=G},ex:h.expression.ex,onSelect:G=>{L(h),e.update({flavor:G.id})}});D.render(0),D.setFlavor(Math.max(0,dt.findIndex(G=>G.id===t.flavor)),{quiet:!0});let F=G=>D.setFlavor(G);p=Hc(h,{scene:a,camera:c,store:e,creatureOptions:S,counter:r,sfx:fr,onCreate:G=>{v.push(G),G.bind(F)},onRemove:G=>{f===G&&L(h),v.splice(1,1),u.clear()}});let B=Zc({scene:a,camera:c,canvas:Yt,floor:R.FLOOR,store:e,counter:r,sfx:fr,getActors:M,getActive:()=>f});Yt.addEventListener("pointerdown",G=>{if(_?.active||u.size||f.world.grab.on)return;let te=null;for(let ee of M()){ee.raycast.setNDC(G,Yt);let xe=ee.raycast.hitTest();xe&&(!te||xe.distance<te.distance)&&(te={actor:ee,distance:xe.distance})}te&&L(te.actor)}),h.bind(F),_=jc({renderer:o,scene:a,camera:c,canvas:Yt,i18n:i,getActors:M,store:e}),C.setTheme(t.theme),p.setEnabled(t.companion),B.setKind(t.toy),Kc({i18n:i,store:e,themes:C,toys:B,company:p,getActive:()=>f,getActors:M,selectActor:L,photo:_,canvas:Yt}),e.subscribe(G=>{let te=dt.findIndex(ee=>ee.id===G.flavor);w.index!==te&&D.setFlavor(te,{quiet:!0}),C.current!==G.theme&&C.setTheme(G.theme),p.enabled!==G.companion&&p.setEnabled(G.companion),B.kind!==G.toy&&B.setKind(G.toy)}),addEventListener("storage",G=>{G.key===fs&&e.refresh()});let P=new Fe,O=new N,U=new we,W=new we(1,1,1);function $(G){m++,d+=G;let te=performance.now()/1e3;y.updateBounds(),p.update(G,te);for(let xe of M())xe.update(G,d,te);B.update(G,te),U.copy(w.current.atten).lerp(W,.3+.7*w.material.rainbow),g.dropMat.attenuationColor.copy(U),g.update(G,b.body),A.counter.material.uniforms.uFocal.value=c.position.distanceTo(h.slime.position);let ee=f.raycast.pointer;!Ye&&ee.has&&!ii&&!f.world.grab.on&&!_.active?P.set(xt(P.x,ee.nx*.18,2.5,G),xt(P.y,ee.ny*.1,2.5,G)):P.set(xt(P.x,0,2,G),xt(P.y,0,2,G)),c.position.set(y.view.base.x+P.x,y.view.base.y+P.y,y.view.base.z),c.lookAt(y.view.target),o.render(a,c)}function j(){for(let G of v)G.grabCtl.release("cancel"),G.physics.cancelHop(),G.world.pinch.value=0,G.world.pinch.last=-10,G.raycast.pointer.has=!1,G.raycast.pointer.lastHit=!1;for(let G of u.keys())try{Yt.releasePointerCapture(G)}catch{}u.clear(),B.cancelDrag(),Yt.style.cursor=""}let re=_c(G=>$(Math.min(G,1/30)),{onPause:j});addEventListener("blur",j);let _e=0;addEventListener("resize",()=>{_e||(_e=requestAnimationFrame(()=>{_e=0,y.layout()}))});for(let G=0;G<7;G++){let te=Math.random()*Math.PI*2,ee=R.HALFW*(1.05+Math.random()*.8);g.addDrop(Math.cos(te)*ee,Math.sin(te)*ee*.7,.02+Math.random()*.05,9999)}h.physics.writeGeometry(),re.start();let Z=new Promise(G=>setTimeout(G,2500));return Promise.race([document.fonts.ready,Z]).finally(()=>{o.compile(a,c),requestAnimationFrame(()=>{Yt.classList.add("ready"),setTimeout(()=>{h.expression.started=!0},Ye?0:350)})}),window.__pururu={get state(){return{body:{...b.body},sq:b.sq,grab:b.grab.on,sleeping:h.expression.ex.sleeping,count:r.value,flavor:e.state.flavor,theme:C.current,companion:p.enabled,toy:B.kind,objects:B.objects.filter(G=>G.visible).length,action:f.actions.current,mood:f.expression.ex.mood,photo:_.active,N:R.N,frames:m,bounds:{...b.bounds}}},doJump:()=>f.actions.run("jump"),setFlavor:F,push:h.physics.push,setLang:i.set,t:i.t,get lang(){return i.get()},screen(){return h.slime.localToWorld(O.set(0,.1,.4)).project(c),{x:(O.x*.5+.5)*innerWidth,y:(-O.y*.5+.5)*innerHeight}}},{loop:re}}cu();
