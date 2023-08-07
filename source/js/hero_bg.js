const backgrounds = {
    step: 100,
    units: [
        {
        item: document.getElementsByClassName('hero__background_first')[0],
        startPos: 0,
        endPos: -200,
        curPos: 0,
        bullit: document.getElementById('bullit_1')
        },
        {
        item: document.getElementsByClassName('hero__background_second')[0],
        startPos: 100,
        endPos: -100,
        curPos: 100,
        bullit: document.getElementById('bullit_2')
        },
        {
        item: document.getElementsByClassName('hero__background_third')[0],
        startPos: 200,
        endPos: 0,
        curPos: 200,
        bullit: document.getElementById('bullit_3'),
        }
    ],


    changeBackgroundAuto: function(){
        for (item in this.units){
            let obj = this.units[item];
            if (obj.curPos <= obj.endPos){
                obj.curPos = obj.startPos;
            }
            else{
                obj.curPos -= this.step;
            }

            if (obj.curPos === 0){
                obj.bullit.style.opacity = '1';
            }
            else{
                obj.bullit.style.opacity = '0.5';
            }

            this.units[item].item.style.left = `${obj.curPos}%`;
        }
    }
}

setInterval(() => {
    backgrounds.changeBackgroundAuto()
}, 8000);