
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
        this.fib = toInt
        if (toInt <= 1) {
            return this.fib
        }
        return this.fibonnacci(toInt-1) + this.fibonnacci(toInt-2)
    }

    triangular (t) {
        const toInt = parseInt(t, 10)
        this.tri = toInt
        const abs = Math.abs(this.tri);
        return ((abs / 2) * (abs + 1)) * (abs / this.tri) || 0;
    }

    primo (p) {
        const toInt = parseInt(p, 10)
        this.pri = toInt
        if (toInt <= 1) {
            return this.pri
        }
        return (this.pri * this.primo(toInt - 1));
    }
}

export default Series
