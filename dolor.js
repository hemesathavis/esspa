function partLayerMixins(compositeMarkDef, partName, compositeMarkConfig, additionalSettings) {
    // Extract the specific configuration for the part
    const partConfig = compositeMarkConfig[partName] || {};

    // Combine the partConfig with additionalSettings
    const combinedConfig = {
        ...partConfig,
        ...additionalSettings
    };

    // Return the combined configuration for the part
    return combinedConfig;
}

// Example usage
const result = partLayerMixins(compositeMarkDef, partName, compositeMarkConfig, additionalSettings);
console.log(result); // Outputs: { color: 'red', size: 3, tooltip: true, opacity: 0.7 }
