(this["webpackJsonpgoit-react-hw-06-myphonebook"]=this["webpackJsonpgoit-react-hw-06-myphonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={listItem:"ContactListItem_listItem__3y1yZ",btn:"ContactListItem_btn__2r6EF",margin:"ContactListItem_margin__2Edj5"}},11:function(t,e,n){t.exports={section:"Filter_section__3y4rc",label:"Filter_label__3DhT5",input:"Filter_input__1C0_D"}},17:function(t,e,n){t.exports={appear:"trans_appear__P-0z2",appearActive:"trans_appearActive__2kz3R"}},18:function(t,e,n){t.exports={title:"Phonebook_title__2sKKs"}},23:function(t,e,n){t.exports={list:"ContactList_list__1-t6Y"}},33:function(t,e,n){},34:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(0),r=n(7),o=n.n(r),i=(n(33),n(34),n(43)),s=n(17),l=n.n(s),u=n(18),b=n.n(u),j=function(){return Object(a.jsx)(i.a,{in:!0,appear:!0,classNames:l.a,timeout:500,children:Object(a.jsx)("h1",{className:b.a.title,children:"Phonebook"})})},m=n(8),d=n(19),h=n(20),O=n(26),p=n(24),f=n(3),_=n(9),x=n.n(_),C=n(6),v=n(44),g={addContact:Object(C.b)("contacts/add",(function(t,e){return{payload:{contact:{id:Object(v.a)(),name:t,number:Number(e)}}}})),deleteContact:Object(C.b)("contacts/delete"),handleChangeFilter:Object(C.b)("contacts/changeFilter")},F=function(t){Object(O.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(d.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(m.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onAddContact(t.state.name,t.state.number),t.setState({name:"",number:""})},t}return Object(h.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsxs)("form",{className:x.a.contactForm,onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{children:["Name",Object(a.jsx)("br",{}),Object(a.jsx)("input",{className:x.a.input,type:"text",value:e,name:"name",onChange:this.handleChange,required:!0})]}),Object(a.jsx)("br",{}),Object(a.jsxs)("label",{children:["Number",Object(a.jsx)("br",{}),Object(a.jsx)("input",{className:x.a.input,type:"tel",value:n,name:"number",onChange:this.handleChange})]}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{className:x.a.addBtn,type:"submit",children:"Add contact"})]})}}]),n}(c.Component),N={onAddContact:g.addContact},y=Object(f.b)(null,N)(F),I=n(22),k=n(10),w=n.n(k),A=Object(f.b)((function(t,e){var n=t.contacts.items.find((function(t){return t.id===e.id}));return Object(I.a)({},n)}),(function(t,e){return{delCont:function(){return t(g.deleteContact(e.id))}}}))((function(t){var e=t.name,n=t.number,c=t.delCont;return Object(a.jsxs)("li",{className:w.a.listItem,children:[Object(a.jsxs)("p",{className:w.a.listItemInfo,children:[e,":"]}),Object(a.jsx)("p",{className:w.a.listItemInfo,children:n}),Object(a.jsx)("button",{className:w.a.btn,onClick:c,children:"Delete"})]})})),L=n(23),S=n.n(L),B=Object(f.b)((function(t){var e=t.contacts,n=e.items,a=e.filter.toLowerCase();return{contacts:n.filter((function(t){return t.name.toLowerCase().includes(a)}))}}))((function(t){var e=t.contacts;return Object(a.jsx)("section",{children:e.map((function(t){return Object(a.jsx)(A,{className:S.a.list,id:t.id},t.id)}))})})),D=n(11),E=n.n(D),P={onChangeFilter:g.handleChangeFilter},z=Object(f.b)((function(t){return{value:t.contacts.filter}}),P)((function(t){var e=t.filter,n=t.onChangeFilter;return Object(a.jsx)("section",{className:E.a.section,children:Object(a.jsxs)("label",{className:E.a.label,children:["Find contacts by name:",Object(a.jsx)("br",{}),Object(a.jsx)("input",{onChange:function(t){return n(t.target.value)},value:e,name:"filter",type:"text",className:E.a.input})]})})}));var J,K=Object(f.b)((function(t){return{value:t.contacts.items}}))((function(t){var e=t.value;return Object(a.jsxs)("div",{children:[Object(a.jsx)(j,{}),Object(a.jsx)(y,{}),Object(a.jsx)(B,{}),e.length>1&&Object(a.jsx)(z,{})]})})),T=n(25),Z=n(2),q=Object(C.c)([],(J={},Object(m.a)(J,g.addContact,(function(t,e){return[].concat(Object(T.a)(t),[e.payload.contact])})),Object(m.a)(J,g.deleteContact,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),J)),G=Object(C.c)("",Object(m.a)({},g.handleChangeFilter,(function(t,e){return e.payload}))),R=Object(Z.c)({items:q,filter:G}),W=Object(C.a)({reducer:{contacts:R}});o.a.render(Object(a.jsx)(f.a,{store:W,children:Object(a.jsx)(K,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__1eZcN",contactFormItem:"ContactForm_contactFormItem__Wgs74",input:"ContactForm_input__21XG7",addBtn:"ContactForm_addBtn__1egNT"}}},[[40,1,2]]]);
//# sourceMappingURL=main.fb1469e3.chunk.js.map