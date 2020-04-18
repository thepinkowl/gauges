<script lang="ts">
    export let progress = 0;

    const getHslColor = (input) => {
        input = Math.min(input, 100);
        input = Math.max(input, 0);

        // const out = 1.2 * input;
        const out = input * input / (100**2 / 120);
        // const out = Math.exp(input/20.887764485); // 100/ln(120)

        return `hsl(${out}, 100%, 50%)`;
    };
</script>

<style lang="scss">
    .gauge {
        height: 10px;
        width: 100%;
        border-radius: 10px;
        border: 1px solid #e0e0e0;

        .progress {
            height: 10px;
            border-radius: 10px;
        }
    }
</style>

<div class="gauge">
    <div class="progress"
         style="width: {progress}%;
         background-color: {getHslColor(progress)}"></div>
</div>
