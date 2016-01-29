function debounce(t,n){var o,n=n||200;return function(){var e=this,i=arguments;clearTimeout(o),o=setTimeout(function(){t.apply(e,Array.prototype.slice.call(i))},n)}}function trianglify(){if(oldWidth!=window.innerWidth){var t=document.querySelector("#canvas");for(points=[],polygons=[],oldWidth=window.innerWidth;t.firstChild;)t.removeChild(t.firstChild);var n=30,o=window.innerWidth-2*n,e=window.innerHeight-2*n,i={width:o,height:e};t.setAttributes(i);var s=(o+e)/20;numPointsX=Math.ceil(o/s)+1,numPointsY=Math.ceil(e/s)+1,unitWidth=Math.ceil(o/(numPointsX-1)),unitHeight=Math.ceil(e/(numPointsY-1));for(var r=0;r<numPointsY;r++)for(var a=0;a<numPointsX;a++)points.push([unitWidth*a+(0==a||a==numPointsX-1?0:(Math.random()*unitWidth-unitWidth/2)/1.4),unitHeight*r+(0==r||r==numPointsY-1?0:(Math.random()*unitHeight-unitHeight/2)/1.4)]);for(var d=0;d<points.length;d++)if(d%numPointsX!=numPointsX-1&&d<=numPointsY*numPointsX-numPointsX-1)for(var u=Math.floor(2*Math.random()),l=0;2>l;l++){var p=document.createElementNS(t.namespaceURI,"polygon"),h="";0==u?0==l?h=points[d].join(",")+" "+points[d+numPointsX].join(",")+" "+points[d+numPointsX+1].join(","):1==l&&(h=points[d].join(",")+" "+points[d+1].join(",")+" "+points[d+numPointsX+1].join(",")):1==u&&(0==l?h=points[d].join(",")+" "+points[d+numPointsX].join(",")+" "+points[d+1].join(","):1==l&&(h=points[d+numPointsX].join(",")+" "+points[d+1].join(",")+" "+points[d+numPointsX+1].join(","))),p.setAttributes({"class":"nofill nostroke",points:h,fill:"rgba(0,0,0,"+Math.random()/4+")"}),polygons.push(p),t.appendChild(p)}}}function fetchPosts(t,n){if(t="undefined"!=typeof t?t:0,n="undefined"!=typeof n?n:!1,loadedPosts)for(var o=Math.min(t+10,loadedPosts.length),e=t;o>e;e++){var i=loadedPosts[e],s=document.createElement("li"),r=document.createElement("a");r.innerHTML=i.title,r.setAttribute("href","http://blog.smarchal.com"+i.url),s.appendChild(r),posts.appendChild(s)}else loadPosts(t,!0)}function loadPosts(t,n){var o=new XMLHttpRequest;o.open("GET","http://blog.smarchal.com/posts.json",!0),o.onload=function(){o.status>=200&&o.status<400&&(loadedPosts=JSON.parse(o.responseText).posts,fetchPosts(t,n))},o.send()}function fetchWorks(t,n){if(t="undefined"!=typeof t?t:0,n="undefined"!=typeof n?n:!1,loadedWorks)for(var o=Math.min(t+10,loadedWorks.length),e=t;o>e;e++){var i=loadedWorks[e],s=document.createElement("li"),r=document.createElement("a");r.innerHTML=i.title,r.setAttribute("href",i.url),s.appendChild(r),works.appendChild(s)}else loadWorks(t,!0)}function loadWorks(t,n){var o=new XMLHttpRequest;o.open("GET","http://blog.smarchal.com/works.json",!0),o.onload=function(){o.status>=200&&o.status<400&&(loadedWorks=JSON.parse(o.responseText).works,fetchWorks(t,n))},o.send()}function init(){trianglify(),fetchPosts(),fetchWorks()}var loadedPosts,loadedWorks,posts=document.querySelector(".posts > ul"),works=document.querySelector(".works > ul");Element.prototype.setAttributes=function(t){for(var n in t)this.setAttribute(n,t[n])};var points=[],polygons=[],oldWidth=0;window.addEventListener("DOMContentLoaded",init,!1),window.addEventListener("resize",debounce(trianglify,50));