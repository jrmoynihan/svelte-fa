
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const NVM_INC: string;
	export const MANPATH: string;
	export const npm_package_devDependencies_prettier: string;
	export const TERM_PROGRAM: string;
	export const NODE: string;
	export const NVM_CD_FLAGS: string;
	export const npm_package_homepage: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const npm_package_devDependencies_tsd: string;
	export const npm_package_devDependencies_typescript: string;
	export const INIT_CWD: string;
	export const TERM: string;
	export const SHELL: string;
	export const npm_package_devDependencies_jest: string;
	export const npm_package_devDependencies_vite: string;
	export const HOMEBREW_REPOSITORY: string;
	export const TMPDIR: string;
	export const npm_package_devDependencies_eslint_plugin_jest: string;
	export const npm_package_scripts_lint: string;
	export const TERM_PROGRAM_VERSION: string;
	export const npm_package_devDependencies_eslint_plugin_svelte3: string;
	export const npm_package_maintainers_0: string;
	export const npm_package_scripts_dev: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const MallocNanoZone: string;
	export const npm_package_scripts_prepublishOnly: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_package_devDependencies_svelte_preprocess: string;
	export const npm_config_registry: string;
	export const PNPM_HOME: string;
	export const npm_package_repository_url: string;
	export const npm_package_exports__: string;
	export const NVM_DIR: string;
	export const USER: string;
	export const npm_package_description: string;
	export const npm_package_license: string;
	export const npm_package_scripts_check_watch: string;
	export const npm_package_exports___package_json: string;
	export const COMMAND_MODE: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const SSH_AUTH_SOCK: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_package_devDependencies_eslint: string;
	export const npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
	export const npm_package_devDependencies_tslib: string;
	export const npm_execpath: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_scripts_package_publish_minor: string;
	export const npm_package_devDependencies__typescript_eslint_parser: string;
	export const PATH: string;
	export const __CFBundleIdentifier: string;
	export const npm_package_keywords_4: string;
	export const npm_package_author: string;
	export const PWD: string;
	export const npm_package_keywords_5: string;
	export const npm_package_keywords_6: string;
	export const npm_package_bugs_url: string;
	export const npm_package_devDependencies__sveltejs_package: string;
	export const npm_package_keywords_7: string;
	export const npm_lifecycle_event: string;
	export const LANG: string;
	export const npm_package_name: string;
	export const npm_package_keywords_0: string;
	export const npm_package_repository_type: string;
	export const npm_package_svelte: string;
	export const npm_package_keywords_1: string;
	export const NODE_PATH: string;
	export const npm_package_keywords_2: string;
	export const npm_package_scripts_build: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const XPC_FLAGS: string;
	export const npm_package_keywords_3: string;
	export const npm_package_devDependencies_svelte_jester: string;
	export const npm_package_devDependencies_eslint_config_prettier: string;
	export const npm_config_node_gyp: string;
	export const XPC_SERVICE_NAME: string;
	export const npm_package_version: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const SHLVL: string;
	export const HOME: string;
	export const npm_package_scripts_package_publish_patch: string;
	export const npm_package_type: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const npm_package_scripts_test: string;
	export const npm_package_devDependencies__fortawesome_fontawesome_common_types: string;
	export const HOMEBREW_PREFIX: string;
	export const npm_config_store_dir: string;
	export const LOGNAME: string;
	export const npm_package_scripts_format: string;
	export const npm_lifecycle_script: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const NVM_BIN: string;
	export const npm_package_scripts_package_publish_major: string;
	export const npm_config_user_agent: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const GIT_ASKPASS: string;
	export const INFOPATH: string;
	export const HOMEBREW_CELLAR: string;
	export const npm_package_devDependencies_jest_environment_jsdom: string;
	export const npm_package_scripts_publish: string;
	export const npm_package_scripts_check: string;
	export const COLORTERM: string;
	export const npm_node_execpath: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {

}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		NVM_INC: string;
		MANPATH: string;
		npm_package_devDependencies_prettier: string;
		TERM_PROGRAM: string;
		NODE: string;
		NVM_CD_FLAGS: string;
		npm_package_homepage: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		npm_package_devDependencies_tsd: string;
		npm_package_devDependencies_typescript: string;
		INIT_CWD: string;
		TERM: string;
		SHELL: string;
		npm_package_devDependencies_jest: string;
		npm_package_devDependencies_vite: string;
		HOMEBREW_REPOSITORY: string;
		TMPDIR: string;
		npm_package_devDependencies_eslint_plugin_jest: string;
		npm_package_scripts_lint: string;
		TERM_PROGRAM_VERSION: string;
		npm_package_devDependencies_eslint_plugin_svelte3: string;
		npm_package_maintainers_0: string;
		npm_package_scripts_dev: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		MallocNanoZone: string;
		npm_package_scripts_prepublishOnly: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_package_devDependencies_svelte_preprocess: string;
		npm_config_registry: string;
		PNPM_HOME: string;
		npm_package_repository_url: string;
		npm_package_exports__: string;
		NVM_DIR: string;
		USER: string;
		npm_package_description: string;
		npm_package_license: string;
		npm_package_scripts_check_watch: string;
		npm_package_exports___package_json: string;
		COMMAND_MODE: string;
		PNPM_SCRIPT_SRC_DIR: string;
		SSH_AUTH_SOCK: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_package_devDependencies_eslint: string;
		npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
		npm_package_devDependencies_tslib: string;
		npm_execpath: string;
		npm_package_devDependencies_svelte: string;
		npm_package_scripts_package_publish_minor: string;
		npm_package_devDependencies__typescript_eslint_parser: string;
		PATH: string;
		__CFBundleIdentifier: string;
		npm_package_keywords_4: string;
		npm_package_author: string;
		PWD: string;
		npm_package_keywords_5: string;
		npm_package_keywords_6: string;
		npm_package_bugs_url: string;
		npm_package_devDependencies__sveltejs_package: string;
		npm_package_keywords_7: string;
		npm_lifecycle_event: string;
		LANG: string;
		npm_package_name: string;
		npm_package_keywords_0: string;
		npm_package_repository_type: string;
		npm_package_svelte: string;
		npm_package_keywords_1: string;
		NODE_PATH: string;
		npm_package_keywords_2: string;
		npm_package_scripts_build: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		XPC_FLAGS: string;
		npm_package_keywords_3: string;
		npm_package_devDependencies_svelte_jester: string;
		npm_package_devDependencies_eslint_config_prettier: string;
		npm_config_node_gyp: string;
		XPC_SERVICE_NAME: string;
		npm_package_version: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_devDependencies_svelte_check: string;
		SHLVL: string;
		HOME: string;
		npm_package_scripts_package_publish_patch: string;
		npm_package_type: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		npm_package_scripts_test: string;
		npm_package_devDependencies__fortawesome_fontawesome_common_types: string;
		HOMEBREW_PREFIX: string;
		npm_config_store_dir: string;
		LOGNAME: string;
		npm_package_scripts_format: string;
		npm_lifecycle_script: string;
		VSCODE_GIT_IPC_HANDLE: string;
		NVM_BIN: string;
		npm_package_scripts_package_publish_major: string;
		npm_config_user_agent: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		GIT_ASKPASS: string;
		INFOPATH: string;
		HOMEBREW_CELLAR: string;
		npm_package_devDependencies_jest_environment_jsdom: string;
		npm_package_scripts_publish: string;
		npm_package_scripts_check: string;
		COLORTERM: string;
		npm_node_execpath: string;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: string]: string | undefined;
	}
}