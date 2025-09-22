import { cpSync } from "node:fs";
import { join } from "node:path";
import type { ConfigPlugin } from "expo/config-plugins";
import { withDangerousMod } from "expo/config-plugins";

const withDrawableAssets: ConfigPlugin<string> = (config, path) =>
	withDangerousMod(config, [
		"android",
		(mod) => (
			cpSync(
				path,
				join(mod.modRequest.platformProjectRoot, "app/src/main/res/drawable"),
				{ recursive: true },
			),
			mod
		),
	]);

export default withDrawableAssets;
