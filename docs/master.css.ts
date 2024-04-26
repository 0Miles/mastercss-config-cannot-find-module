import type { Config } from '@master/css'
import { masterCSSConfig } from '@example/ui'
import extendConfig from '@techor/extend'

export default extendConfig(
    masterCSSConfig,
    {
        styles: {},
        rules: {},
        variables: {},
        semantics: {},
        mediaQueries: {},
        animations: {},
        selectors: {},
        functions: {}
    } as Config
)