/**
 * 請參考 human.ts 的語法完成 Rational 類
 */
export class Rational {
    // todo: ...
    up: number;
    down: number;

    constructor(up: number, down: number) {
        this.up = up;
        this.down = down;
    }

    normalize(): Rational {
        const gcd = this.gcd(this.up, this.down);
        return new Rational(this.up / gcd, this.down / gcd);
    }

    private gcd(a: number, b: number): number {
        return b === 0 ? a : this.gcd(b, a % b);
    }

    equals(other: Rational): boolean {
        const r1 = this.normalize();
        const r2 = other.normalize();
        return r1.up === r2.up && r1.down === r2.down;
    }

    isWhole(): boolean {
        return this.up % this.down === 0;
    }

    isDecimal(): boolean {
        return !this.isWhole();
    }

    toString(): string {
        return `${this.up}/${this.down}`;
    }

    static _parseRational(numArr: string[], denomArr: string[]): Rational {
        const num = parseInt(numArr.join(""), 10);
        const denom = parseInt(denomArr.join(""), 10);
        return new Rational(num, denom);
    }

    static parseRational(rationalStr: string): Rational {
        const parts = rationalStr.split("/").map(Number);
        if (parts.length !== 2 || isNaN(parts[0]) || isNaN(parts[1])) {
            throw new Error("Invalid rational string format. Expected format: 'numerator/denominator'");
        }
        const up = parts[0];
        const down = parts[1];
        return new Rational(up, down);
    }
}