
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
        this.serieN = 2 * this.triangular(this.n+2) * 3 * this.primo(this.n-2)/7 * this.fibonnacci(this.n)
        return this.serieN
    }

    fibonnacci (f) {
        const toInt = parseInt(f, 10)
        const abs = Math.abs(toInt)
        this.fib = abs
        if (abs <= 1) {
            return this.fib
        }
        return this.fibonnacci(abs-1) + this.fibonnacci(abs-2)
    }

    triangular (t) {
        const toInt = parseInt(t, 10)
        this.tri = toInt
        const abs = Math.abs(this.tri);
        return ((abs / 2) * (abs + 1)) * (abs / this.tri) || 0;
    }

    primo (p) {
        const toInt = parseInt(p, 10)
        const abs = Math.abs(toInt)
        this.pri = abs
        if (abs <= 1) {
            return this.pri
        }
        return (this.pri * this.primo(abs - 1));
    }
}

export default Series
