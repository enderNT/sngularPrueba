class Series {
    n = 0
    fib = 0
    tri = 0
    pri = 0

    serieN = 0

    constructor(n) {
        this.n = parseInt(n, 10)
    }

    calcular () {
        this.serieN = 2 * this.triangular(Math.abs(this.n + 2)) * 3 * this.primo(Math.abs(this.n-2))/7 * this.fibonnacci(Math.abs(this.n))
        return this.serieN
    }

    fibonnacci (f) {
        this.fib = parseInt(f, 10)
        if (f <= 1) {
            return this.fib
        }
        return this.fibonnacci(f-1) + this.fibonnacci(f-2)
    }

    triangular (t) {
        this.tri = parseInt(t, 10)
        const abs = Math.abs(this.tri);
        return ((abs / 2) * (abs + 1)) * (abs / this.tri) || 0;
    }

    primo (p) {
        this.pri = parseInt(p, 10)
        if (p <= 1) {
            return this.pri
        }
        return (this.pri * this.primo(p - 1));
    }
}

export default Series
