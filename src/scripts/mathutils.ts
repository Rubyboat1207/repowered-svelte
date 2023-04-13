export function lerp(start: number, end: number, t: number): number {
    return (1 - t) * start + t * end;
}

export function colorLerp(color1: string, color2: string, percentage: number): string {
    if(percentage > 1) {
        return color2;
    }
    if(percentage < 0) {
        return color1;
    }

    // Convert the colors to RGB
    const r1 = parseInt(color1.substring(1, 3), 16);
    const g1 = parseInt(color1.substring(3, 5), 16);
    const b1 = parseInt(color1.substring(5, 7), 16);
    const r2 = parseInt(color2.substring(1, 3), 16);
    const g2 = parseInt(color2.substring(3, 5), 16);
    const b2 = parseInt(color2.substring(5, 7), 16);
  
    // Calculate the color at the percentage
    const r = Math.round(r1 + (r2 - r1) * percentage);
    const g = Math.round(g1 + (g2 - g1) * percentage);
    const b = Math.round(b1 + (b2 - b1) * percentage);
  
    // Convert the RGB color to hexadecimal
    const hex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  
    return hex;
  }