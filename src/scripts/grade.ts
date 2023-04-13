export class Grade {
    max: number;
    points: number;

    constructor(max: number, points: number) {
        this.max = max;
        this.points = points;
    }
    
    public pointsToOneDecimal: () => string = () => {
        if(this.points.toString().includes('.')) {
            return this.points.toString();
        }
        return this.points.toFixed(1);
    }
}