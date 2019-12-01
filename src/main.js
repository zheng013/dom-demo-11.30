
const div = dom.find('.red', div)[0]
dom.style(div, { color: 'red', border: '1px solid black', backgroundColor: 'blue' })
// dom.each(div, () => console.logs())
const div1 = dom.find('#test')[0]
const n = dom.each(dom.children(div1), (n) => dom.style(n, {}))
console.log(n)
const ee = dom.create('<div id="jhk">555</div>')
const ee1 = ee //只是复制了值，最后引用的是地址
console.log(ee)
dom.style(ee, 'color', 'red')
dom.append(div, ee)
//在js中创建一个元素，还要将其插入页面才会生效

// dom.wrap(ee, div)// 包了两层，删不到。append和wrap选其中一个,*warp用于包住在html已经存在生成的节点
// dom.empty(ee)
dom.attr(div, 'title', 'test1')
const o = dom.attr(div, 'title')
console.log(o)
dom.text(div, '这是新的内')
const k = dom.html(div)
console.log(k)
dom.class.add(div, 'jj')
dom.class.has(div, 'jj')
dom.class.remove(div, 'jj')
const fn = () => {
    console.log('点击了')
}
dom.on(div, 'click', fn)
dom.off(div, 'click', fn)
let l = dom.index(div)
console.log(l)

