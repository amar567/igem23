var canvas = document.getElementById('test'),
            ctx = canvas.getContext('2d'),
            stack = [],
            w = window.innerWidth,
            h = window.innerHeight;

        var drawer = function () {
            //originally made background white
            //ctx.fillStyle="#222";
            ctx.clearRect(0, 0, w, h);
            stack.forEach(function (el) {
                el();
            })
            requestAnimationFrame(drawer);
        }
        var anim = function () {
            var x = 0, y = 0;
            //tallness of blades * variable + min 
            var maxTall = Math.random() * (h / 6) + (h / 6);
            //thickness of bladess
            var maxSize = Math.random() * (h / 60) + 5;
            //speed of blade growth
            var speed = Math.random() * 1;
            var position = Math.random() * w - w / 2;
            var c = function (l, u) { return Math.round(Math.random() * (u || 255) + l || 0); }

            //color of grass   
            var color = 'rgb(' + c(80, 50) + ',' + c(225, 80) + ',' + c(80, 50) + ')';
            return function () {

                //how fast + far the blades bend 
                var deviation = Math.cos(x / 50) * Math.min(x / 4, 50),
                    tall = Math.min(maxTall),
                    size = Math.min(maxSize);
                x += speed;
                ctx.save();

                ctx.strokeWidth = 10;
                ctx.translate(w / 2 + position, h)
                ctx.fillStyle = color;

                ctx.beginPath();
                ctx.lineTo(-size, 0);
                ctx.quadraticCurveTo(-size, -tall / 2, deviation, -tall);
                ctx.quadraticCurveTo(size, -tall / 2, size, 0);
                //ctx.closePath();?
                ctx.fill();

                ctx.restore()
            }
        };
        //number of blades it makes
        for (var x = 0; x < (w / 7); x++) { stack.push(anim()); }
        canvas.width = w;
        canvas.height = h;
        drawer();
