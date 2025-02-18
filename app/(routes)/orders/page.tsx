import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'


import classes from './index.module.scss'
import { Gutter } from '@/components/ui/Gutter'

export default async function Orders() {



  // try {
  //   orders = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/orders`, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `JWT ${token}`,
  //     },
  //     cache: 'no-store',
  //   })
  //     ?.then(async res => {
  //       if (!res.ok) notFound()
  //       const json = await res.json()
  //       if ('error' in json && json.error) notFound()
  //       if ('errors' in json && json.errors) notFound()
  //       return json
  //     })
  //     ?.then(json => json.docs)
  // } catch (error) {
  //   // when deploying this template on Payload Cloud, this page needs to build before the APIs are live
  //   // so swallow the error here and simply render the page with fallback data where necessary
  //   // in production you may want to redirect to a 404  page or at least log the error somewhere
  //   // console.error(error)
  // }

  return (
    <Gutter className={classes.orders}>
      <h1>Orders</h1>
      {(!orders || !Array.isArray(orders) || orders?.length === 0) && (
        <p className={classes.noOrders}>You have no orders.</p>
      )}
      {orders && orders.length > 0 && (
        <ul className={classes.ordersList}>
          {orders?.map((order, index) => (
            <li key={order.id} className={classes.listItem}>
              <Link className={classes.item} href={`/orders/${order.id}`}>
                <div className={classes.itemContent}>
                  <h4 className={classes.itemTitle}>{`Order ${order.id}`}</h4>
                  <div className={classes.itemMeta}>
                    <p>{`Ordered On: ${formatDateTime(order.createdAt)}`}</p>
                    <p>
                      {'Total: '}
                      {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'usd',
                      }).format(order.total / 100)}
                    </p>
                  </div>
                </div>
                <Button
                  appearance="secondary"
                  label="View Order"
                  className={classes.button}
                  el="button"
                />
              </Link>
              {index !== orders.length - 1 && <HR />}
            </li>
          ))}
        </ul>
      )}
      <HR />
      <Button href="/account" appearance="primary" label="Go to account" />
    </Gutter>
  )
}
