// allows us to pass a string into the injectionToken

import { InjectionToken } from '@angular/core';

// export the constant and string being passed into the token
export const API_TOKEN = new InjectionToken<string>('api');