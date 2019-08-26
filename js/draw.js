const temp_loop = (fps) => {
    const canvas = document.getElementById('link')
    const ctx = canvas.getContext('2d')

    const kill_loop = setInterval(() => {
        draw(link, 'right', 10, ctx)
    }, 1000/fps)
}

const draw = (asset, frames, px_size, ctx) => {
    if(!asset[frames]) return `${frames} is not defined.`
    height = asset[frames][asset.frame+0].length
    width = asset[frames][asset.frame+0][0].length
    ctx.clearRect(asset.pos.x - px_size, asset.pos.y - px_size, (width+2) * px_size, (height+2) * px_size)
    asset[frames][asset.frame+0].forEach((line, yidx) => {
        line.forEach((px, xidx) => {
            ctx.fillStyle = asset.color[px]
            ctx.fillRect(asset.pos.x + xidx * px_size, asset.pos.y + yidx * px_size, px_size, px_size)
        })
    })
    asset.frame = !asset.frame
}

const canvas = document.getElementById('link')  //temp
const ctx = canvas.getContext('2d') //temp

// draw(link, 'right', 10, ctx)
temp_loop(5)