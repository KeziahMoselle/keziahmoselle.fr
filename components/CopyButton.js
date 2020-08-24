import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import copy from 'copy-to-clipboard'
import { FaRegClipboard, FaClipboardCheck } from 'react-icons/fa'

function CopyButton ({ value, className, leftIcon, ...rest }) {
  const { t } = useTranslation()
  const [copied, setCopied] = useState(false)

  function copyValueToClipboard () {
    copy(value)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }

  return (
    <a
      {...rest}
      className={`copy-button ${copied ? 'copied' : ''} ${className}`}
      onClick={copyValueToClipboard}
    >
      { leftIcon && (
        <div className="flex valign">
          {leftIcon}
          <span>
            { copied ? t('form.copied') : value }
          </span>
        </div>
      ) || (
        <span>
          { copied ? t('form.copied') : value }
        </span>
      )}

      { !copied && <FaRegClipboard size={28} /> }
      { copied && <FaClipboardCheck size={28} /> }
    </a>
  )
}

export default CopyButton
