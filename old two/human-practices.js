document.querySelector('#farmers').addEventListener('mouseenter', () => {
    document.querySelectorAll('.right-pesticide, .below-pesticide').forEach(section => {
        section.classList.add('hidden')
    })
    document.querySelectorAll('.below-farmers, .right-farmers').forEach(section => {
        section.classList.toggle('hidden')
    })
})

document.querySelector('#pesticide').addEventListener('mouseenter', () => {
    document.querySelectorAll('.right-agriculture, .below-agriculture').forEach(section => {
        section.classList.add('hidden')
    })
    document.querySelectorAll('.below-pesticide, .right-pesticide').forEach(section => {
        section.classList.toggle('hidden')
    })
})

document.querySelector('#agriculture').addEventListener('mouseenter', () => {
    document.querySelectorAll('.right-molecular, .below-molecular').forEach(section => {
        section.classList.add('hidden')
    })
    document.querySelectorAll('.below-agriculture, .right-agriculture').forEach(section => {
        section.classList.toggle('hidden')
    })
})

document.querySelector('#molecular').addEventListener('mouseenter', () => {
    document.querySelectorAll('.right-industry, .below-industry').forEach(section => {
        section.classList.add('hidden')
    })
    document.querySelectorAll('.below-molecular, .right-molecular').forEach(section => {
        section.classList.toggle('hidden')
    })
})

document.querySelector('#industry').addEventListener('mouseenter', () => {
    document.querySelectorAll('.below-industry, .right-industry').forEach(section => {
        section.classList.toggle('hidden')
    })
})

document.querySelector('.flowchart').addEventListener('mouseleave', () => {
    document.querySelectorAll('.right-pesticide, .below-pesticide').forEach(section => {
        section.classList.add('hidden')
    })
    document.querySelectorAll('.below-farmers, .right-farmers').forEach(section => {
        section.classList.add('hidden')
    })
})