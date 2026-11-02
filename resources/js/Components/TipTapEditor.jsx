import React, { useCallback } from 'react';
import axios from 'axios';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Youtube from '@tiptap/extension-youtube';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Placeholder from '@tiptap/extension-placeholder';
import { Table } from '@tiptap/extension-table';
import { TableRow } from '@tiptap/extension-table-row';
import { TableHeader } from '@tiptap/extension-table-header';
import { TableCell } from '@tiptap/extension-table-cell';
import {
    Bold, Italic, Underline as UnderlineIcon, Strikethrough,
    AlignLeft, AlignCenter, AlignRight,
    List, ListOrdered, Link as LinkIcon, Image as ImageIcon, Video,
    Heading1, Heading2, Quote, Table as TableIcon, Maximize, Minimize,
    HelpCircle
} from 'lucide-react';


const ToolbarButton = ({ onClick, disabled, isActive, title, children }) => (
    <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={`flex-shrink-0 p-1.5 rounded transition-colors flex items-center justify-center border-0 outline-none focus:outline-none focus:ring-0 ${
            isActive 
            ? 'bg-[#E2E2E2] dark:bg-zinc-700 text-[#1C1C1C] dark:text-zinc-100' 
            : 'bg-transparent text-[#878A8C] dark:text-zinc-400 hover:bg-[#E2E2E2] dark:hover:bg-zinc-700 hover:text-[#1C1C1C] dark:hover:text-zinc-100'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        title={title}
    >
        {children}
    </button>
);

const MenuBar = ({ editor, onOpenImageModal, onOpenVideoModal, onOpenLinkModal, isFullscreen, onToggleFullscreen }) => {
    if (!editor) {
        return null;
    }

    const addImage = useCallback(() => {
        const url = window.prompt('URL of the image');
        if (url) {
            editor.chain().focus().setImage({ src: url }).run();
        }
    }, [editor]);

    const addVideo = useCallback(() => {
        onOpenVideoModal();
    }, [onOpenVideoModal]);

    const setLink = useCallback(() => {
        const previousUrl = editor.getAttributes('link').href;
        onOpenLinkModal(previousUrl || '');
    }, [editor, onOpenLinkModal]);

    const insertFaq = useCallback(() => {
        const question = window.prompt('Enter FAQ Question:', 'What is your policy?');
        if (!question) return;
        const answer = window.prompt('Enter FAQ Answer:', 'Please provide answer here.');
        if (!answer) return;
        editor.chain().focus().insertContent(`
            <div class="faq-item my-4 p-4 border border-gray-200 dark:border-zinc-700 rounded-lg bg-gray-50 dark:bg-zinc-800">
                <h3 class="text-base font-bold text-gray-900 dark:text-gray-100 mb-1.5">Q: ${question}</h3>
                <p class="text-sm text-gray-600 dark:text-zinc-300 m-0">${answer}</p>
            </div>
            <p></p>
        `).run();
    }, [editor]);

    const Divider = () => <div className="flex-shrink-0 w-[1px] h-6 bg-gray-200 dark:bg-zinc-700 mx-1.5"></div>;

    return (
        <div 
            onWheel={(e) => {
                if (e.deltaY !== 0) {
                    e.currentTarget.scrollLeft += e.deltaY;
                }
            }}
            className="flex items-center gap-1 p-1.5 bg-[#F6F7F8] dark:bg-zinc-800 border-b border-[#EDEFF1] dark:border-zinc-700 overflow-x-auto min-w-0"
            style={{ scrollbarWidth: 'thin' }}
        >
            <ToolbarButton onClick={onToggleFullscreen} title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}>
                {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
            </ToolbarButton>
            <Divider />
            <ToolbarButton
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={!editor.can().chain().focus().toggleBold().run()}
                isActive={editor.isActive('bold')}
                title="Bold"
            >
                <Bold size={18} strokeWidth={editor.isActive('bold') ? 2.5 : 2} />
            </ToolbarButton>
            
            <ToolbarButton
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
                isActive={editor.isActive('italic')}
                title="Italic"
            >
                <Italic size={18} strokeWidth={editor.isActive('italic') ? 2.5 : 2} />
            </ToolbarButton>
            
            <ToolbarButton
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                isActive={editor.isActive('underline')}
                title="Underline"
            >
                <UnderlineIcon size={18} strokeWidth={editor.isActive('underline') ? 2.5 : 2} />
            </ToolbarButton>
            
            <ToolbarButton
                onClick={() => editor.chain().focus().toggleStrike().run()}
                disabled={!editor.can().chain().focus().toggleStrike().run()}
                isActive={editor.isActive('strike')}
                title="Strikethrough"
            >
                <Strikethrough size={18} strokeWidth={editor.isActive('strike') ? 2.5 : 2} />
            </ToolbarButton>

            <Divider />

            <ToolbarButton
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                isActive={editor.isActive('heading', { level: 1 })}
                title="Heading 1"
            >
                <Heading1 size={18} />
            </ToolbarButton>
            
            <ToolbarButton
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                isActive={editor.isActive('heading', { level: 2 })}
                title="Heading 2"
            >
                <Heading2 size={18} />
            </ToolbarButton>

            <Divider />

            <ToolbarButton
                onClick={() => editor.chain().focus().setTextAlign('left').run()}
                isActive={editor.isActive({ textAlign: 'left' })}
                title="Align Left"
            >
                <AlignLeft size={18} />
            </ToolbarButton>
            
            <ToolbarButton
                onClick={() => editor.chain().focus().setTextAlign('center').run()}
                isActive={editor.isActive({ textAlign: 'center' })}
                title="Align Center"
            >
                <AlignCenter size={18} />
            </ToolbarButton>
            
            <ToolbarButton
                onClick={() => editor.chain().focus().setTextAlign('right').run()}
                isActive={editor.isActive({ textAlign: 'right' })}
                title="Align Right"
            >
                <AlignRight size={18} />
            </ToolbarButton>

            <Divider />

            <ToolbarButton
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                isActive={editor.isActive('bulletList')}
                title="Bullet List"
            >
                <List size={18} />
            </ToolbarButton>
            
            <ToolbarButton
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                isActive={editor.isActive('orderedList')}
                title="Numbered List"
            >
                <ListOrdered size={18} />
            </ToolbarButton>
            
            <ToolbarButton
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                isActive={editor.isActive('blockquote')}
                title="Quote"
            >
                <Quote size={18} />
            </ToolbarButton>

            <Divider />

            <ToolbarButton
                onClick={setLink}
                isActive={editor.isActive('link')}
                title="Link"
            >
                <LinkIcon size={18} />
            </ToolbarButton>
            
            <ToolbarButton onClick={onOpenImageModal} title="Upload Image">
                <ImageIcon size={18} />
            </ToolbarButton>
            
            <ToolbarButton onClick={addVideo} title="YouTube Video">
                <Video size={18} />
            </ToolbarButton>

            <ToolbarButton onClick={insertFaq} title="Insert FAQ Item">
                <HelpCircle size={18} className="text-amber-500" />
            </ToolbarButton>
            
            <Divider />

            <ToolbarButton
                onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}
                title="Insert Table"
            >
                <TableIcon size={18} />
            </ToolbarButton>

            {editor.isActive('table') && (
                <>
                    <Divider />
                    <ToolbarButton onClick={() => editor.chain().focus().addColumnBefore().run()} title="Add Col Left">
                        <span className="text-xs font-bold px-1">+Col</span>
                    </ToolbarButton>
                    <ToolbarButton onClick={() => editor.chain().focus().addColumnAfter().run()} title="Add Col Right">
                        <span className="text-xs font-bold px-1">Col+</span>
                    </ToolbarButton>
                    <ToolbarButton onClick={() => editor.chain().focus().deleteColumn().run()} title="Delete Col">
                        <span className="text-xs font-bold px-1 text-rose-500">-Col</span>
                    </ToolbarButton>
                    <ToolbarButton onClick={() => editor.chain().focus().addRowBefore().run()} title="Add Row Above">
                        <span className="text-xs font-bold px-1">+Row</span>
                    </ToolbarButton>
                    <ToolbarButton onClick={() => editor.chain().focus().addRowAfter().run()} title="Add Row Below">
                        <span className="text-xs font-bold px-1">Row+</span>
                    </ToolbarButton>
                    <ToolbarButton onClick={() => editor.chain().focus().deleteRow().run()} title="Delete Row">
                        <span className="text-xs font-bold px-1 text-rose-500">-Row</span>
                    </ToolbarButton>
                    <ToolbarButton onClick={() => editor.chain().focus().mergeCells().run()} title="Merge Cells">
                        <span className="text-xs font-bold px-1 text-blue-500">Merge</span>
                    </ToolbarButton>
                    <ToolbarButton onClick={() => editor.chain().focus().splitCell().run()} title="Split Cell">
                        <span className="text-xs font-bold px-1 text-blue-500">Split</span>
                    </ToolbarButton>
                    <ToolbarButton onClick={() => editor.chain().focus().deleteTable().run()} title="Delete Table">
                        <span className="text-xs font-bold px-1 text-rose-600">Del Tbl</span>
                    </ToolbarButton>
                </>
            )}
        </div>
    );
};

// Custom Link extension with accurate target & rel attribute parsing and rendering
const CustomLink = Link.extend({
    addAttributes() {
        return {
            ...this.parent?.(),
            target: {
                default: null,
                parseHTML: element => element.getAttribute('target'),
                renderHTML: attributes => {
                    if (!attributes.target) return {};
                    return { target: attributes.target };
                },
            },
            rel: {
                default: null,
                parseHTML: element => element.getAttribute('rel'),
                renderHTML: attributes => {
                    if (!attributes.rel) return {};
                    return { rel: attributes.rel };
                },
            },
        };
    },
});

export default function TipTapEditor({ value, onChange }) {
    const [isFullscreen, setIsFullscreen] = React.useState(false);
    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            CustomLink.configure({
                openOnClick: false,
                HTMLAttributes: {
                    class: 'text-[#0079D3] hover:underline',
                    target: null,
                    rel: null,
                },
            }),
            Image.configure({
                HTMLAttributes: {
                    class: 'max-w-full rounded-md mt-4 mb-4 bg-gray-50',
                    loading: 'lazy',
                    decoding: 'async'
                },
            }),
            Youtube.configure({
                controls: true,
                nocookie: true,
                HTMLAttributes: {
                    class: 'w-full aspect-video rounded-md mt-4 mb-4',
                },
            }),
            Placeholder.configure({
                placeholder: 'Text (optional)',
                emptyEditorClass: 'is-editor-empty',
            }),
            Table.configure({
                resizable: true,
                HTMLAttributes: {
                    class: 'w-full mb-4 border-collapse table-auto',
                },
            }),
            TableRow,
            TableHeader,
            TableCell,
        ],
        content: value,
        editorProps: {
            attributes: {
                class: 'prose max-w-none prose-sm sm:prose-base focus:outline-none min-h-[150px] p-4 text-[#1C1C1C] dark:text-zinc-200 dark:prose-invert editor-content',
            },
        },
        onUpdate: ({ editor }) => {
            const html = editor.getHTML();
            // If it's just an empty paragraph, send empty string
            if (html === '<p></p>' || html === '') {
                onChange('');
            } else {
                onChange(html);
            }
        },
    });

    // Synchronize editor content when value is updated externally (e.g., AI auto-fill or reset)
    React.useEffect(() => {
        if (editor && value !== undefined) {
            const currentHtml = editor.getHTML();
            if (value !== currentHtml) {
                // Only update if value is genuinely different
                if (value === '' && (currentHtml === '<p></p>' || currentHtml === '')) {
                    return;
                }
                editor.commands.setContent(value || '');
            }
        }
    }, [value, editor]);

    const [isImageModalOpen, setIsImageModalOpen] = React.useState(false);
    const [imageFile, setImageFile] = React.useState(null);
    const [imageAlt, setImageAlt] = React.useState('');
    const [isUploading, setIsUploading] = React.useState(false);
    const fileInputRef = React.useRef(null);

    const [isVideoModalOpen, setIsVideoModalOpen] = React.useState(false);
    const [videoUrl, setVideoUrl] = React.useState('');

    const [isLinkModalOpen, setIsLinkModalOpen] = React.useState(false);
    const [linkUrl, setLinkUrl] = React.useState('');
    const [linkText, setLinkText] = React.useState('');
    const [linkOpenInNewTab, setLinkOpenInNewTab] = React.useState(false);
    const [linkIsNoFollow, setLinkIsNoFollow] = React.useState(false);
    const [linkIsSponsored, setLinkIsSponsored] = React.useState(false);
    const [linkIsUgc, setLinkIsUgc] = React.useState(false);
    const savedLinkRangeRef = React.useRef(null);

    const handleImageUpload = async (e) => {
        e.preventDefault();
        if (!imageFile) return;

        setIsUploading(true);
        const formData = new FormData();
        formData.append('file', imageFile);

        try {
            const res = await fetch((typeof window !== 'undefined' && window.BASE_PATH ? window.BASE_PATH : '') + '/api/upload', {
                method: 'POST',
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content')
                },
                body: formData
            });
            const data = await res.json();
            
            if (data.success && editor) {
                editor.chain().focus().setImage({ src: data.url, alt: imageAlt }).run();
                setIsImageModalOpen(false);
                setImageFile(null);
                setImageAlt('');
                if (fileInputRef.current) fileInputRef.current.value = '';
            } else {
                alert(data.error || 'Upload failed');
            }
        } catch (error) {
            console.error(error);
            alert('Upload failed');
        } finally {
            setIsUploading(false);
        }
    };

    const handleVideoSubmit = (e) => {
        e.preventDefault();
        if (videoUrl.trim()) {
            editor.chain().focus().setYoutubeVideo({ src: videoUrl.trim() }).run();
        }
        setIsVideoModalOpen(false);
        setVideoUrl('');
    };

    const handleLinkSubmit = (e) => {
        if (e && e.preventDefault) e.preventDefault();
        const url = linkUrl.trim();
        if (url === '') {
            if (savedLinkRangeRef.current && savedLinkRangeRef.current.from !== savedLinkRangeRef.current.to) {
                editor.chain().focus().setTextSelection(savedLinkRangeRef.current).extendMarkRange('link').unsetLink().run();
            } else {
                editor.chain().focus().extendMarkRange('link').unsetLink().run();
            }
            setIsLinkModalOpen(false);
            setLinkUrl('');
            return;
        }

        let finalUrl = url;
        if (!/^https?:\/\//i.test(finalUrl) && !/^mailto:/i.test(finalUrl) && !/^tel:/i.test(finalUrl) && !/^#/i.test(finalUrl)) {
            finalUrl = 'https://' + finalUrl;
        }

        const attributes = { href: finalUrl };
        if (linkOpenInNewTab) {
            attributes.target = '_blank';
        } else {
            attributes.target = null;
        }

        const relParts = [];
        if (linkIsNoFollow) relParts.push('nofollow');
        if (linkIsSponsored) relParts.push('sponsored');
        if (linkIsUgc) relParts.push('ugc');
        if (linkOpenInNewTab) {
            relParts.push('noopener', 'noreferrer');
        }

        attributes.rel = relParts.length > 0 ? Array.from(new Set(relParts)).join(' ') : null;

        const range = savedLinkRangeRef.current;
        const displayText = linkText.trim() || finalUrl;

        const escape = (str) => String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

        editor.commands.focus();

        if (range && range.from !== range.to) {
            editor.commands.setTextSelection({ from: range.from, to: range.to });
            const originalText = editor.state.doc.textBetween(range.from, range.to, ' ');
            if (displayText !== originalText) {
                const relAttr = attributes.rel ? ` rel="${escape(attributes.rel)}"` : '';
                const targetAttr = attributes.target ? ` target="${escape(attributes.target)}"` : '';
                const html = `<a href="${escape(finalUrl)}"${targetAttr}${relAttr}>${escape(displayText)}</a>`;
                editor.chain().insertContent(html).run();
            } else {
                editor.chain().extendMarkRange('link').setLink(attributes).run();
            }
        } else {
            if (range) {
                editor.commands.setTextSelection({ from: range.from, to: range.to });
            }
            const relAttr = attributes.rel ? ` rel="${escape(attributes.rel)}"` : '';
            const targetAttr = attributes.target ? ` target="${escape(attributes.target)}"` : '';
            const html = `<a href="${escape(finalUrl)}"${targetAttr}${relAttr}>${escape(displayText)}</a>`;
            editor.chain().insertContent(html).run();
        }

        setIsLinkModalOpen(false);
        setLinkUrl('');
    };

    return (
        <div className={`border border-[#EDEFF1] dark:border-zinc-700 focus-within:border-[#1C1C1C] dark:focus-within:border-zinc-500 bg-white dark:bg-zinc-900 transition-colors relative flex flex-col ${isFullscreen ? 'fixed inset-0 z-[100] w-screen h-[100dvh] rounded-none border-none editor-fullscreen' : 'rounded-md overflow-hidden'}`}>
            <MenuBar 
                editor={editor} 
                onOpenImageModal={() => setIsImageModalOpen(true)} 
                onOpenVideoModal={() => setIsVideoModalOpen(true)}
                onOpenLinkModal={() => {
                    const attrs = editor.getAttributes('link');
                    const { from, to } = editor.state.selection;
                    savedLinkRangeRef.current = { from, to };
                    setLinkUrl(attrs.href || '');
                    setLinkOpenInNewTab(attrs.target === '_blank');
                    const relStr = String(attrs.rel || '').toLowerCase();
                    setLinkIsNoFollow(relStr.includes('nofollow'));
                    setLinkIsSponsored(relStr.includes('sponsored'));
                    setLinkIsUgc(relStr.includes('ugc'));

                    const selected = from !== to ? editor.state.doc.textBetween(from, to, ' ') : '';
                    setLinkText(selected);
                    setIsLinkModalOpen(true);
                }}
                isFullscreen={isFullscreen}
                onToggleFullscreen={() => setIsFullscreen(!isFullscreen)}
            />
            <div className={isFullscreen ? "flex-1 overflow-y-auto bg-slate-50 dark:bg-zinc-950" : ""}>
                <EditorContent editor={editor} />
            </div>
            
            {/* Video Modal */}
            {isVideoModalOpen && (
                <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center p-4">
                    <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-xl w-full max-w-md overflow-hidden">
                        <div className="p-4 border-b border-gray-200 dark:border-zinc-700 flex justify-between items-center">
                            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Add YouTube Video</h3>
                            <button onClick={() => setIsVideoModalOpen(false)} className="text-gray-400 hover:text-gray-500">&times;</button>
                        </div>
                        <div className="p-4 space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-zinc-300 mb-1.5">YouTube Video URL</label>
                                <input 
                                    type="url"
                                    value={videoUrl}
                                    onChange={(e) => setVideoUrl(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault();
                                            handleVideoSubmit(e);
                                        }
                                    }}
                                    placeholder="https://www.youtube.com/watch?v=..."
                                    className="block w-full px-4 py-3.5 bg-slate-100 dark:bg-zinc-800/80 border border-transparent outline-none rounded-full text-sm font-medium text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all hover:bg-slate-200 dark:hover:bg-zinc-800 hover:border-amber-500"
                                    required
                                />
                            </div>
                            <div className="flex justify-end gap-2 pt-2">
                                <button 
                                    type="button" 
                                    onClick={() => setIsVideoModalOpen(false)}
                                    className="px-5 py-2.5 rounded-full text-sm font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button 
                                    type="button"
                                    onClick={handleVideoSubmit}
                                    className="px-5 py-2.5 rounded-full text-sm font-extrabold text-black bg-amber-500 hover:bg-amber-400 focus:outline-none focus:ring-4 focus:ring-amber-500/30 transition-all shadow-lg shadow-amber-500/20"
                                >
                                    Add Video
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Link Modal */}
            {isLinkModalOpen && (
                <div className="absolute inset-0 bg-black/50 z-20 flex items-center justify-center p-4">
                    <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-2xl w-full max-w-lg overflow-hidden border border-slate-200 dark:border-zinc-700">
                        <div className="p-4 sm:p-5 border-b border-gray-200 dark:border-zinc-700 flex justify-between items-center bg-slate-50 dark:bg-zinc-900/50">
                            <div>
                                <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                                    <LinkIcon size={18} className="text-blue-600 dark:text-blue-400" />
                                    Link Settings &amp; SEO Tags
                                </h3>
                                <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">Configure URL, display text, window target and SEO rel attributes</p>
                            </div>
                            <button onClick={() => setIsLinkModalOpen(false)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-xl font-bold p-1">&times;</button>
                        </div>
                        <div className="p-5 space-y-4 max-h-[80vh] overflow-y-auto">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-300 mb-1">Link Text (Anchor Text)</label>
                                <input 
                                    type="text"
                                    value={linkText}
                                    onChange={(e) => setLinkText(e.target.value)}
                                    placeholder="e.g. Best Coaching in Sikar"
                                    className="block w-full px-4 py-2.5 bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-300 mb-1">Destination URL <span className="text-rose-500">*</span></label>
                                <input 
                                    type="text"
                                    value={linkUrl}
                                    onChange={(e) => setLinkUrl(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault();
                                            handleLinkSubmit(e);
                                        }
                                    }}
                                    placeholder="https://example.com"
                                    className="block w-full px-4 py-2.5 bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    autoFocus
                                />
                            </div>

                            <div className="bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-700/80 rounded-xl p-3.5 space-y-3">
                                {/* Option 1: Open in new window */}
                                <label className="flex items-start gap-2.5 cursor-pointer select-none">
                                    <input 
                                        type="checkbox" 
                                        checked={linkOpenInNewTab} 
                                        onChange={e => setLinkOpenInNewTab(e.target.checked)} 
                                        className="w-4 h-4 mt-0.5 rounded text-blue-600 focus:ring-blue-500 cursor-pointer" 
                                    />
                                    <div className="flex flex-col">
                                        <span className="text-xs font-semibold text-slate-800 dark:text-zinc-200">Open in a new window</span>
                                        <span className="text-[11px] text-slate-500 dark:text-zinc-400">Adds <code>target="_blank"</code> (safe with noopener noreferrer)</span>
                                    </div>
                                </label>

                                <div className="h-[1px] bg-slate-200 dark:bg-zinc-700/60" />

                                {/* Option 2: nofollow */}
                                <label className="flex items-start gap-2.5 cursor-pointer select-none">
                                    <input 
                                        type="checkbox" 
                                        checked={linkIsNoFollow} 
                                        onChange={e => setLinkIsNoFollow(e.target.checked)} 
                                        className="w-4 h-4 mt-0.5 rounded text-blue-600 focus:ring-blue-500 cursor-pointer" 
                                    />
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-1.5">
                                            <span className="text-xs font-semibold text-slate-800 dark:text-zinc-200">Add rel="nofollow" (Search engine optimization for external links)</span>
                                            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">nofollow</span>
                                        </div>
                                        <span className="text-[11px] text-slate-500 dark:text-zinc-400">Tells search engines not to crawl or pass PageRank to untrusted external links</span>
                                    </div>
                                </label>

                                <div className="h-[1px] bg-slate-200 dark:bg-zinc-700/60" />

                                {/* Option 3: sponsored */}
                                <label className="flex items-start gap-2.5 cursor-pointer select-none">
                                    <input 
                                        type="checkbox" 
                                        checked={linkIsSponsored} 
                                        onChange={e => setLinkIsSponsored(e.target.checked)} 
                                        className="w-4 h-4 mt-0.5 rounded text-amber-500 focus:ring-amber-500 cursor-pointer" 
                                    />
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-1.5">
                                            <span className="text-xs font-semibold text-slate-800 dark:text-zinc-200">Add rel="sponsored" (Paid, affiliate, or sponsored link)</span>
                                            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300">sponsored</span>
                                        </div>
                                        <span className="text-[11px] text-slate-500 dark:text-zinc-400">Official Google tag for commercial, paid partnerships, advertisements &amp; affiliate links</span>
                                    </div>
                                </label>

                                <div className="h-[1px] bg-slate-200 dark:bg-zinc-700/60" />

                                {/* Option 4: ugc */}
                                <label className="flex items-start gap-2.5 cursor-pointer select-none">
                                    <input 
                                        type="checkbox" 
                                        checked={linkIsUgc} 
                                        onChange={e => setLinkIsUgc(e.target.checked)} 
                                        className="w-4 h-4 mt-0.5 rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer" 
                                    />
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-1.5">
                                            <span className="text-xs font-semibold text-slate-800 dark:text-zinc-200">Add rel="ugc" (User-generated content)</span>
                                            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300">ugc</span>
                                        </div>
                                        <span className="text-[11px] text-slate-500 dark:text-zinc-400">Official tag for user-generated content, comments, reviews &amp; community links</span>
                                    </div>
                                </label>
                            </div>

                            {/* Active Tags Preview */}
                            {(linkIsNoFollow || linkIsSponsored || linkIsUgc || linkOpenInNewTab) && (
                                <div className="p-2.5 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-lg text-xs text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
                                    <span className="font-bold">Generated Tag:</span>
                                    <code>&lt;a{linkOpenInNewTab ? ' target="_blank"' : ''}{[linkIsNoFollow ? 'nofollow' : '', linkIsSponsored ? 'sponsored' : '', linkIsUgc ? 'ugc' : '', linkOpenInNewTab ? 'noopener noreferrer' : ''].filter(Boolean).length > 0 ? ` rel="${[linkIsNoFollow ? 'nofollow' : '', linkIsSponsored ? 'sponsored' : '', linkIsUgc ? 'ugc' : '', linkOpenInNewTab ? 'noopener noreferrer' : ''].filter(Boolean).join(' ')}"` : ''}&gt;</code>
                                </div>
                            )}

                            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100 dark:border-zinc-800">
                                <button 
                                    type="button" 
                                    onClick={() => setIsLinkModalOpen(false)}
                                    className="px-4 py-2 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button 
                                    type="button" 
                                    onClick={() => {
                                        editor.chain().focus().extendMarkRange('link').unsetLink().run();
                                        setIsLinkModalOpen(false);
                                        setLinkUrl('');
                                    }}
                                    className="px-4 py-2 rounded-lg text-xs font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-500/10 hover:bg-rose-100 dark:hover:bg-rose-500/20 transition-colors"
                                >
                                    Remove Link
                                </button>
                                <button 
                                    type="button" 
                                    onClick={handleLinkSubmit}
                                    className="px-5 py-2 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-sm"
                                >
                                    Apply Link
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            
            {isImageModalOpen && (
                <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center p-4">
                    <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-xl w-full max-w-md overflow-hidden">
                        <div className="p-4 border-b border-gray-200 dark:border-zinc-700 flex justify-between items-center">
                            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Upload Image</h3>
                            <button onClick={() => setIsImageModalOpen(false)} className="text-gray-400 hover:text-gray-500">&times;</button>
                        </div>
                        <div className="p-4 space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-zinc-300 mb-1.5">Select Image</label>
                                <input 
                                    type="file" 
                                    accept="image/*"
                                    ref={fileInputRef}
                                    onChange={(e) => setImageFile(e.target.files[0])}
                                    className="block w-full text-sm text-slate-500 dark:text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-amber-100 file:text-amber-700 hover:file:bg-amber-200 dark:file:bg-amber-500/10 dark:file:text-amber-400 dark:hover:file:bg-amber-500/20 transition-all cursor-pointer"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-zinc-300 mb-1.5">Alt Text (Optional)</label>
                                <input 
                                    type="text"
                                    value={imageAlt}
                                    onChange={(e) => setImageAlt(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault();
                                            if (imageFile && !isUploading) {
                                                handleImageUpload(e);
                                            }
                                        }
                                    }}
                                    placeholder="Description of image for accessibility"
                                    className="block w-full px-4 py-3.5 bg-slate-100 dark:bg-zinc-800/80 border border-transparent outline-none rounded-full text-sm font-medium text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all hover:bg-slate-200 dark:hover:bg-zinc-800 hover:border-amber-500"
                                />
                            </div>
                            <div className="flex justify-end gap-2 pt-2">
                                <button 
                                    type="button" 
                                    onClick={() => setIsImageModalOpen(false)}
                                    className="px-5 py-2.5 rounded-full text-sm font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button 
                                    type="button"
                                    onClick={handleImageUpload}
                                    disabled={!imageFile || isUploading}
                                    className="px-5 py-2.5 rounded-full text-sm font-extrabold text-black bg-amber-500 hover:bg-amber-400 focus:outline-none focus:ring-4 focus:ring-amber-500/30 disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-lg shadow-amber-500/20"
                                >
                                    {isUploading ? 'Uploading...' : 'Upload & Insert'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            
            <style jsx global>{`
                .editor-fullscreen .ProseMirror {
                    min-height: calc(100vh - 60px);
                    max-width: 800px;
                    margin: 0 auto;
                    background: white;
                    padding: 2rem 4rem;
                }
                .dark .editor-fullscreen .ProseMirror {
                    background: #18181b;
                }
                @media (max-width: 640px) {
                    .editor-fullscreen .ProseMirror {
                        padding: 1rem;
                    }
                }
                .ProseMirror p.is-editor-empty:first-child::before {
                    color: #878A8C;
                    content: attr(data-placeholder);
                    float: left;
                    height: 0;
                    pointer-events: none;
                }
                .ProseMirror iframe {
                    width: 100%;
                    min-height: 400px;
                }
                .editor-content {
                    font-family: inherit;
                }
                .editor-content p {
                    margin-bottom: 0.5em;
                }
                .editor-content h1 { font-size: 1.5em; font-weight: bold; margin-bottom: 0.5em; }
                .editor-content h2 { font-size: 1.25em; font-weight: bold; margin-bottom: 0.5em; }
                .editor-content ul { list-style-type: disc; padding-left: 1.5em; margin-bottom: 0.5em; }
                .editor-content ol { list-style-type: decimal; padding-left: 1.5em; margin-bottom: 0.5em; }
                .editor-content blockquote { border-left: 3px solid #EDEFF1; padding-left: 1em; margin-left: 0; color: #878A8C; font-style: italic; }
                .editor-content table { border-collapse: collapse; margin: 0 0 1.5em 0; table-layout: fixed; width: auto !important; border: none !important; }
                .editor-content table tr, .editor-content table thead, .editor-content table tbody { border: none !important; }
                .editor-content table td, .editor-content table th { border: 1px solid #ced4da; box-sizing: border-box; padding: 8px 12px; position: relative; vertical-align: top; }
                @media (max-width: 768px) {
                    .editor-content table { display: block; overflow-x: auto; white-space: nowrap; }
                    .editor-content table td, .editor-content table th { min-width: 120px; }
                }
                .editor-content table th { background-color: #f8f9fa; font-weight: bold; text-align: left; }
                .dark .editor-content table td, .dark .editor-content table th { border-color: #4b5563; }
                .dark .editor-content table th { background-color: #374151; }
            `}</style>
        </div>
    );
}
