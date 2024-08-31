document.addEventListener("DOMContentLoaded", function() {
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        const secondPercent = bar.getAttribute('data-second-percent');
        const barValue = bar.querySelector('.bar__value');
        barValue.style.width = percent + '%';
        barValue.style.background = `linear-gradient(
            to right,
            var(--color-accent) 0%,
            var(--color-accent) ${secondPercent}%,
            var(--color-accent-variant) ${secondPercent}%,
            var(--color-accent-variant) 100%
        )`;
    });
});
