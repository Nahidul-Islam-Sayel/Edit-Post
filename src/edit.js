import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";
import { useSelect, useDispatch} from "@wordpress/data";
export default function Edit() {
	const title = useSelect(select=>{
		return select("core/editor").getEditedPostAttribute("title");
	})
	const {editPost} = useDispatch('core/editor');
	return (
		<p {...useBlockProps()}>
			<h2>{wp.data.select("core/editor").getEditedPostAttribute("title")}</h2>
			<input
				value={title}
				onChange={(e) =>
					editPost({ title: e.target.value })
				}
			/>
		</p>
	);
}
