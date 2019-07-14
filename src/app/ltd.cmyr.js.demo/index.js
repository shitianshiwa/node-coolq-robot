// import * as CQ from '../../bin/CQ.old'
import { CQApp } from 'cq-robot'
// LtdCmyrJsDemo
class App extends CQApp {
    constructor() {
        super('ltd.cmyr.js.demo', __dirname)
        this.CQ.setDebug(true)
    }
    debug() {
        this.privateMsg('test', 1, 996881204, '这是一条私聊消息', 1)
        this.groupMsg('test', 1, 947983200, 996881204, '', '这是一条群消息', 1)
        this.discussMsg('test', 1, 580771123, 996881204, '这是一条讨论组消息', 1)
    }
    startup() {
        return 0
    }
    exit() {
        return 0
    }
    enable() {
        this.isEnable = true
        return 0
    }
    disable() {
        this.isEnable = false
        return 0
    }
    async  privateMsg(subType, msgId, fromQQ, msg, font) {
        if (fromQQ === 996881204) {
            let res = `这是${this.APP_ID}，你发送了：${msg}`
            this.CQ.sendPrivateMsg(fromQQ, res)
        }
        return 0
    }
    async   groupMsg(subType, msgId, fromGroup, fromQQ, fromAnonymous, msg, font) {
        if (fromQQ === 996881204) {
            this.CQ.sendGroupMsg(fromGroup, `这是${this.APP_ID}，你发送了：${msg}`)
        }
        return 1
    }
    async  discussMsg(subType, msgId, fromDiscuss, fromQQ, msg, font) {
        if (fromQQ === 996881204) {
            this.CQ.send_discuss_msg(fromDiscuss, `这是${this.APP_ID}，你发送了：${msg}`)
        }
        return 0
    }
    async  groupUpload(subType, sendTime, fromGroup, fromQQ, file) {
        return 0
    }
    async groupAdmin(subType, sendTime, fromGroup, beingOperateQQ) {
        return 0
    }
    async  groupDecrease(subType, sendTime, fromGroup, fromQQ, beingOperateQQ) {
        return 0
    }
    async  groupIncrease(subType, sendTime, fromGroup, fromQQ, beingOperateQQ) {
        return 0
    }
    async  friendAdd(subType, sendTime, fromQQ) {
        return 0
    }
    async requestAddFriend(subType, sendTime, fromQQ, msg, responseFlag) {
        return 0
    }
    async requestAddGroup(subType, sendTime, fromGroup, fromQQ, msg, responseFlag) {
        return 0
    }
}
const app = new App()//类名可以随意
export { app }//导出模块的名称必须为app
/**
 *仅在debug模式下执行，若不需要也可注释掉
 *
 */
if (app.CQ.getDebug()) {
    app.debug()
}
