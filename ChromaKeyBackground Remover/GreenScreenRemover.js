const box = document.querySelector('.box');
        const video = document.querySelector('.vid');
        let width = video.clientWidth;
        let height = video.clientHeight;
        const c = document.querySelector('canvas');
        c.setAttribute('height',height);
        const ctx = c.getContext('2d');
        video.addEventListener('play', drawVid);
        function drawVid(){
            ctx.drawImage(video,0,0,width,height);
            let frame = ctx.getImageData(0,0,width,height);
            for(let i=0; i<frame.data.length; i+=4){
                let r = frame.data[i];
                let g = frame.data[i + 1];
                let b = frame.data[i + 2];
                if(r>10 & r<100 & g>100 & g<190 & b<50){
                    frame.data[i + 3] = 0;
                }
            }
            ctx.putImageData(frame,0,0);            
            requestAnimationFrame(drawVid);
        }     