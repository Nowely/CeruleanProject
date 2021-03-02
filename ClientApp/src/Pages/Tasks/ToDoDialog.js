import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useState, useRef, useEffect} from "react";
import {TextField} from "@material-ui/core";

export const ToDoDialog = ({onClose, value: valueProp, open, onDelete, onSave}) => {
	const [value, setValue] = useState(valueProp);
	useEffect(() => {
		if (!open) {
			setValue(valueProp);
		}
	}, [valueProp, open]);

	return <Dialog
		disableBackdropClick
		disableEscapeKeyDown
		fullWidth={true}
		maxWidth="sm"
		open={open}
	>
		<DialogTitle>{value.title}</DialogTitle>

		<DialogContent dividers>
			<TextField
				label="Note"
				multiline
				fullWidth
				rows={4}
				value={value.note}
				onChange={(event => setValue({...value, note: event.target.value}))}
				variant="outlined"
			/>
		</DialogContent>

		<DialogActions>
			{/*TODO убрать костыль со стилем*/}
			<Button style={{right: 349}} onClick={() => {
				onDelete(value.id);
				onClose();
			}} variant="contained" color="secondary"> Delete </Button>
			<Button autoFocus onClick={() => onClose()} color="primary"> Cancel </Button>
			<Button onClick={() => {
				onSave(value);
				onClose(value);
			}} variant="contained" color="primary"> Ok </Button>
		</DialogActions>
	</Dialog>;
}