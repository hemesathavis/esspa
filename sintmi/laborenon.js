function cartesianToSpherical(cartesian) {
    const x = cartesian[0];
    const y = cartesian[1];
    const z = cartesian[2];

    const theta = Math.atan2(y, x); // azimuthal angle
    const phi = Math.asin(z / Math.sqrt(x*x + y*y + z*z)); // polar angle

    return [theta, phi];
}

// Example usage:
const cartesianCoords = [1, 1, 1];
const sphericalCoords = cartesianToSpherical(cartesianCoords);
console.log(sphericalCoords); // Output: [0.7853981633974483, 0.6154797086703874]
