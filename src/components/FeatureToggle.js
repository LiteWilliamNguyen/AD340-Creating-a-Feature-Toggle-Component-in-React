import react from 'react';

// Define the function component with two props: isEnabled and featureName
function FeatureToggle({isEnabled, featureName}) {
    return (
        <div>
            {isEnabled ? <p>{featureName}</p>: <p>Feature {featureName} is disabled</p>}
        </div>
    );

}

export default FeatureToggle;